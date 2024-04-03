/* eslint-disable no-console */
import Post from '../models/post.model.js'
import { errorHandler } from '../utils/error.js'

export const createPost = async (req, res, next) => {
  if (!req.user.isAdmin) {
    return next(errorHandler(403, 'You are not allowed to create a post'))
  }
  if (!req.body.title || !req.body.content) {
    return next(errorHandler(400, 'Please provide all required fields'))
  }
  const slug = req.body.title
    .split(' ')
    .join('-')
    .toLowerCase()
    .replace(/[^a-zA-Z0-9-]/g, '')
  const newPost = new Post({
    ...req.body,
    slug,
    userId: req.user.id
  })
  try {
    const savedPost = await newPost.save()
    res.status(201).json(savedPost)
  } catch (error) {
    next(error)
  }
}


export const getPosts = async (req, res, next) => {
  try {
    const startIndex = parseInt(req.query.startIndex) || 0
    const limit = parseInt(req.query.limit) || 9
    const sortDirection = req.query.order === 'asc' ? 1 : -1
    const query = {}
    if (req.query.userId) {
      query.userId = req.query.userId
    }
    if (req.query.category) {
      query.category = req.query.category
    }
    if (req.query.slug) {
      query.slug = req.query.slug
    }
    if (req.query.postId) {
      query._id = req.query.postId
    }
    /*
    query.$or là một mảng chứa các điều kiện tìm kiếm MongoDB. Điều kiện tìm kiếm này được xây dựng để tìm các bài viết (posts) có tiêu đề (title) hoặc nội dung (content) chứa một chuỗi tìm kiếm cụ thể được xác định trong req.query.searchTerm.
    Cụ thể, điều kiện tìm kiếm được định nghĩa bằng cách sử dụng toán tử $regex trong MongoDB. Toán tử $regex cho phép tìm kiếm các giá trị phù hợp với một biểu thức chính quy (regular expression).
    Trong trường hợp này, $regex được sử dụng để so khớp tiêu đề và nội dung với giá trị của req.query.searchTerm.
    Thông qua $regex, giá trị req.query.searchTerm được sử dụng làm biểu thức chính quy để tìm kiếm các bài viết có tiêu đề hoặc nội dung chứa chuỗi tìm kiếm.
     */
    if (req.query.searchTerm) {
      query.$or = [
        { title: { $regex: req.query.searchTerm, $options: 'i' } },
        { content: { $regex: req.query.searchTerm, $options: 'i' } }
      ]
    }
    const posts = await Post.find(query)
      .sort({ updatedAt: sortDirection })
      .skip(startIndex)
      .limit(limit)

    const totalPosts = await Post.countDocuments()

    const now = new Date()

    const oneMonthAgo = new Date(
      now.getFullYear(),
      now.getMonth() - 1,
      now.getDate()
    )

    const lastMonthPosts = await Post.countDocuments({
      createdAt: { $gte: oneMonthAgo }
    })

    res.status(200).json({
      posts,
      totalPosts,
      lastMonthPosts
    })

  } catch (error) {
    next(error)
  }
}


export const deletepost = async (req, res, next) => {
  if (!req.user.isAdmin || req.user.id !== req.params.userId) {
    return next(errorHandler(403, 'You are not allowed to delete this post'))
  }
  try {
    await Post.findByIdAndDelete(req.params.postId)
    res.status(200).json('The post has been deleted')
  } catch (error) {
    next(error)
  }
}

export const updatepost = async (req, res, next) => {
  if (!req.user.isAdmin || req.user.id !== req.params.userId) {
    return next(errorHandler(403, 'You are not allowed to update this post'))
  }
  try {
    const updatedPost = await Post.findByIdAndUpdate(
      req.params.postId,
      {
        $set: {
          title: req.body.title,
          content: req.body.content,
          category: req.body.category,
          image: req.body.image
        }
      },
      { new: true }
    )
    res.status(200).json(updatedPost)
  } catch (error) {
    next(error)
  }
}
