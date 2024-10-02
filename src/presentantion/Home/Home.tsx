import "./Home.css";
export const Home = () => {
  return (
    <>
      <main className="parent">
        <section className="child1">
          {/* Titulo y demas */}
          <div>
            <h3 style={{ color: "#5287FF" }}>Core features</h3>
            <h1>Develops systematically with Comet.</h1>
            <p>
              <span style={{ fontWeight: 800 }}>
                Adaptable sections are ideal for{" "}
              </span>
              crafting versatile layouts.
            </p>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "flex-start", // Alinear todos los elementos en la parte superior
              justifyContent: "center",
              gap: "1rem", // Añadir espacio entre los divs hijos
              marginBottom: "2rem",
            }}
          >
            <div>
              <img
                src="./fingerprint.png"
                style={{ width: "40px", height: "40px", marginBottom: "1rem" }}
                alt="Fingerprint icon"
              />
              <h4 style={{ fontWeight: 600 }}>System analyze your data</h4>
              <p style={{ marginBottom: "1rem" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <span style={{ color: "#5287FF", cursor: "pointer" }}>
                Learn more
              </span>
            </div>
            <div>
              <img
                src="./24-hours.png"
                style={{ width: "40px", height: "40px", marginBottom: "1rem" }}
                alt="24 hours icon"
              />
              <h4 style={{ fontWeight: 600 }}>Direct system management</h4>
              <p style={{ marginBottom: "1rem" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <span style={{ color: "#5287FF", cursor: "pointer" }}>
                Learn more
              </span>
            </div>
          </div>
        </section>

        <section className="child2">
          <img src="./home.jpg"></img>
        </section>
      </main>
    </>
  );
};
