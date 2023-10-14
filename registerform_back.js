const [userData, setUserData] = useState({
    name: "",
    Art: "",
    email: "",
    password: "",

  });

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };

  // connect with firebase
  const submitData = async (event) => {
    event.preventDefault();
    const { name, Art,  email, password } = userData;

    if (name && Art &&  email && password) {
      const res = fetch(
        "https://artify-22d2a-default-rtdb.firebaseio.com/users.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
              name,
              Art,
              email,
              password,

          }),
        }
      );

      if (res) {
        setUserData({
          name: "",
          Art: "",

          email: "",
          password: "",
        });
        //{name && <Navbar name={name} />}
        alert("Data Stored");
      } else {
        alert("Please fill the fields properly");
      }
    } else {
      alert("Please fill the fields properly");
    }
  };