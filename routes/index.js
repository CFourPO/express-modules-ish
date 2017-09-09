import express from 'express';
import mongoose from 'mongoose';
import bookmarkController from './bookmark/bookmark.controller';
import categoryController from './category/category.controller';
import userController from './user/user.controller';

const router = express.Router();

router.get('/bookmark', bookmarkController.selectAll);
router.get('/bookmark/:id', bookmarkController.selectById);
router.post('/bookmark', bookmarkController.insert);

router.get('/category', categoryController.selectAll);
router.get('/category/:id', categoryController.selectById);
router.post('/category', categoryController.insert);
router.put('/category', categoryController.addChild);
// router.use('/bookmark', bookmarkController);

// router.use('/user', userController);

/* GET index page. */
router.get('/', (req, res, next) => {
  res.json({ title: 'Express Me' });
});

export default router;
