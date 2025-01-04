import { Router } from 'express';
import { createTodo, getTodos, updateTodo } from '../controllers/todos';

const router = Router();

router.post('/', createTodo);

router.get('/', getTodos);

router.patch('/:id', updateTodo);

router.delete('/:id', (req, res) => {
  res.send('DELETE request to the homepage');
});

export default router;
