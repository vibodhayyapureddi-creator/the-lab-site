const members = [
  { name: "Vibodh Ayyapureddi", role: "Founder and Lead" },
  { name: "Shyam Batchu" },
  { name: "Randy Li" },
  { name: "Kallen Raeder" },
  { name: "Blake Franks" },
  { name: "David Foster" },
  { name: "Isaac Levesque" },
  { name: "Jaden Das" },
  { name: "Parker Ingram" },
  { name: "Andrew Coon" },
  { name: "Deniz Egemen" },
  { name: "Chinmay Tiwari" },
  { name: "Atharva Tripathi" },
];

const navItems = [
  ["Home", "#home"],
  ["Members", "#members"],
  ["Electric Car", "#electric-car"],
  ["Support", "#support"],
  ["Contact", "#contact"],
];

function App() {
  return (
    <>
      <nav className="nav" aria-label="Main navigation">
        <div className="container nav-inner">
          <a className="brand" href="#home">
            <img className="mark" src="/logo.svg" alt="The Lab Boise logo" />
            <span>The Lab Boise</span>
          </a>
          <div className="nav-links">
            {navItems.map(([label, href]) => (
              <a key={href} href={href}>
                {label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <main>
        <section id="home" className="hero section">
          <div className="container hero-layout">
            <div>
              <div className="eyebrow">Engineering Organization</div>
              <h1>The Lab Boise</h1>
              <p className="lead">
                The Lab Boise is a student-led engineering organization in
                Boise, Idaho focused on building real projects, prototyping,
                and solving technical problems.
              </p>
              <div className="hero-actions">
                <a
                  className="hero-contact"
                  href="mailto:vibodhayyapureddi@gmail.com"
                >
                  Email The Lab Boise
                </a>
              </div>
              <div className="hero-rail">
                <span>
                  <strong>Main Project:</strong> Electric Car 2026
                </span>
                <span>
                  <strong>Location:</strong> Boise, Idaho
                </span>
              </div>
            </div>
            <div className="panel">
              <div className="panel-title">Electric Car 2026</div>
              <p>The main project focus for The Lab Boise.</p>
              <span className="status">In progress</span>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container split">
            <div className="info-block">
              <h2>About</h2>
              <p>
                The Lab Boise brings student engineering work into one
                organized place. The focus is practical design, prototyping,
                testing, and turning ideas into working systems.
              </p>
            </div>
            <div className="info-block">
              <h2>What We Work On</h2>
              <ul>
                <li>Mechanical design</li>
                <li>Electrical systems</li>
                <li>Software and controls</li>
                <li>Testing</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="members" className="section">
          <div className="container">
            <div className="section-heading">
              <h2>Members</h2>
              <p>
                The Lab Boise is open to new members. Anyone interested in
                engineering, building, design, or technical projects is
                welcome.
              </p>
            </div>
            <div className="member-grid">
              {members.map((member) => (
                <div className="member" key={member.name}>
                  {member.name}
                  {member.role && <span> - {member.role}</span>}
                </div>
              ))}
            </div>
            <div className="member-note">
              <p>
                <strong>Current members:</strong> The Lab Boise includes people
                across different stages of life and experience, from high
                school and college students to working professionals.
              </p>
            </div>
          </div>
        </section>

        <section id="electric-car" className="section">
          <div className="container">
            <div className="project">
              <div className="project-meta">Upcoming Project</div>
              <h2>Electric Car 2026</h2>
              <p>
                The Lab Boise is currently centered on Electric Car 2026.
                Planning is underway, and progress will be added here as the
                project develops.
              </p>
            </div>
            <div className="project-facts">
              <div className="project-fact">
                <strong>Status:</strong> Planning
              </div>
              <div className="project-fact">
                <strong>Year:</strong> 2026
              </div>
              <div className="project-fact">
                <strong>Location:</strong> Boise, Idaho
              </div>
            </div>
          </div>
        </section>

        <section id="support" className="section">
          <div className="container">
            <div className="support-box">
              <h2>Sponsors and Donations</h2>
              <p>
                The Lab Boise is open to sponsors, donations, materials, tools,
                advice, and other support for engineering projects.
              </p>
              <p>
                <a
                  className="contact-link"
                  href="mailto:vibodhayyapureddi@gmail.com"
                >
                  vibodhayyapureddi@gmail.com
                </a>
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container">
            <h2>Contact</h2>
            <div className="contact-box">
              <p>
                For questions, membership, sponsorships, donations, or anything
                else, email:
              </p>
              <p>
                <a
                  className="contact-link"
                  href="mailto:vibodhayyapureddi@gmail.com"
                >
                  vibodhayyapureddi@gmail.com
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <span>The Lab Boise · Engineering organization</span>
          <span>Based in Boise, Idaho</span>
          <span>Maintained by Vibodh Ayyapureddi</span>
        </div>
      </footer>
    </>
  );
}

export default App;
