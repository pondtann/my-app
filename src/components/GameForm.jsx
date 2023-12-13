import { Form, Link } from "react-router-dom";

function GameForm() {
  return (
    <>
      <Form>
        <p>
          <label htmlFor="description">รายละเอียด</label>
          <textarea id="description" name="description" required rows={3} />
        </p>
      </Form>
    </>
  );
}

export default GameForm;
