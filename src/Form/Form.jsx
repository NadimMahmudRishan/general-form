const Form = () => {
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target.email.value);
    console.log("Form submit.");
  };
  return (
    <div>
      <form onSubmit={handelSubmit}>
        <input
          className="border border-red-900 rounded-md bg-slate-200 px-2"
          type="text"
          name="name"
          id=""
        />
        <br />
        <input
          className="border border-red-900 rounded-md bg-slate-200 px-2 my-3"
          type="email"
          name="email"
          id=""
        />
        <br />
        <input
          className="border border-red-900 rounded-md bg-slate-200 px-2 mb-3"
          type="password"
          name="password"
          id=""
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Form;
