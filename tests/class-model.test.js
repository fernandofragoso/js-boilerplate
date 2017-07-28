import ClassModel from '../src/class-model'

test('ClassModel.functionModel', () => {
  const testObject = new ClassModel('Test1');
  expect(testObject.functionModel()).toBe("Function return for Test1 class");
})
