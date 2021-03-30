

const styles = {
    left: {
      borderTopLeftRadius: "20px",
      borderBottomLeftRadius: "20px",
    },
    right: {
      borderTopRightRadius: "20px",
      borderBottomRightRadius: "20px",
    },
    info: { padding: 0, listStyleType: "none", fontSize: "14px" },
  };

const Nav = ()=> {
    return (

        <div className="d-flex justify-content-center mb-4">
        <ul
          class="nav nav-pills nav-fill"
          style={{ marginTop: "20px", width: "70%" }}
        >
          <li class="nav-item">
            <a class="nav-link active" href="#" style={styles.left}>
              Top Stories
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" style={styles.right}>
              Most Popular
            </a>
          </li>
        </ul>
      </div>
      )
}

export default Nav