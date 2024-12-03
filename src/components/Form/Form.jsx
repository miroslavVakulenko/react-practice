import { Formik, Form, Field } from 'formik';
// import { FaPlus } from 'react-icons/fa';
import IconButton from '../IconButton/IconButton';
export default function TaskForm() {
  return (
    <div>
      <Formik initialValues={{ newTask: '' }}>
        <Form>
          <Field name="newTask" placeholder="Add new task" />
          <IconButton />
        </Form>
      </Formik>
    </div>
  );
}
