import express from 'express';
import mongoose from 'mongoose';
import bookmarkController from './bookmark/bookmark.controller';
import categoryController from './category/category.controller';
import userController from './user/user.controller';
import listController from './lists/list.controller';

const router = express.Router();

/** TODO: replace each sub-route with nested router: 
 *  
 * let subRoute = './<sub-route>/index';
 * router.use('/<sub-route>', subRoute);
 */

// Bookmark
router.get('/bookmark', bookmarkController.selectAll);
router.get('/bookmark/:id', bookmarkController.selectById);
router.post('/bookmark', bookmarkController.insert);

// Category
router.get('/category', categoryController.selectAll);
router.get('/category/:id', categoryController.selectById);
router.post('/category', categoryController.insert);
router.put('/category', categoryController.addChild);

// User
router.get('/user', userController.selectAll);
router.get('/user/:id', userController.selectById);
router.post('/user', userController.insert);

// List
router.get('/list', listController.selectAll);
router.get('/list/:id', listController.selectById);
router.post('/list', listController.insert);
router.put('/list', listController.addItem);

/* GET index page. */
router.get('/', (req, res, next) => {
  res.json({ title: 'Express Me' });
});

export default router;
