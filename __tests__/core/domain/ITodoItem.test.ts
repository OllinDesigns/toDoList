import { ITodoItem } from '../../../src/application/dtos/IToDoItem';
import mongoose from 'mongoose';


describe('ITodoItem', () => {
  test('should have _id, item, and completed properties', () => {
    // Arrange & Act: No need to create an instance since it's an interface
    // We just need to check the type

    // Assert
    const item: ITodoItem = {
      _id: new mongoose.Types.ObjectId(),
      item: 'Buy groceries',
      completed: false,
    };
    expect(item._id).toBeInstanceOf(mongoose.Types.ObjectId);
    expect(typeof item.item).toBe('string');
    expect(typeof item.completed).toBe('boolean');
  });

  test('should correctly infer types', () => {
    const item: ITodoItem = {
      _id: new mongoose.Types.ObjectId(),
      item: 'Buy groceries',
      completed: false,
    };

    // TypeScript should not throw any error since the types match the interface definition
    expect(item._id).toBeDefined();
    expect(typeof item.item).toBe('string');
    expect(typeof item.completed).toBe('boolean');
  });
});

// describe('ITodoItem Interface', () => {
  
// });