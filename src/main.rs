use leptos::prelude::*;

fn main() {
    mount_to_body(App)
}

#[component]
fn App() -> impl IntoView {
    view! {
        <style>
            {r#"
            :root {
                --bg: #fbfef9;
                --paper: #ffffff;
                --ink: #181818;
                --ink-2: #a63446;
                --muted: #666a63;
                --line: #e0e4dc;
                --accent: #a63446;
                --accent-dark: #842838;
                --accent-soft: #f5e5e8;
                --warm: #a63446;
                font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif;
            }

            * {
                box-sizing: border-box;
            }

            html {
                scroll-behavior: smooth;
            }

            body {
                margin: 0;
                color: var(--ink);
                background:
                    linear-gradient(rgba(166, 52, 70, 0.035) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(166, 52, 70, 0.035) 1px, transparent 1px),
                    var(--bg);
                background-size: 56px 56px;
                font-size: 16px;
                line-height: 1.6;
            }

            a {
                color: inherit;
                text-decoration: none;
            }

            .container {
                width: min(900px, calc(100% - 32px));
                margin: 0 auto;
            }

            .nav {
                background: rgba(251, 254, 249, 0.94);
                border-bottom: 1px solid var(--line);
                position: sticky;
                top: 0;
                z-index: 10;
                backdrop-filter: blur(10px);
            }

            .nav-inner {
                min-height: 66px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 18px;
            }

            .brand {
                display: flex;
                align-items: center;
                gap: 10px;
                font-weight: 700;
            }

            .mark {
                width: 32px;
                height: 32px;
                display: block;
            }

            .nav-links {
                display: flex;
                flex-wrap: wrap;
                justify-content: flex-end;
                gap: 16px;
                color: var(--muted);
                font-size: 0.95rem;
            }

            .nav-links a:hover {
                color: var(--accent);
                border-bottom: 1px solid transparent;
            }

            .nav-links a {
                padding: 4px 0;
                border-bottom: 1px solid transparent;
            }

            .nav-links a:hover {
                border-color: var(--accent);
            }

            h1,
            h2,
            h3,
            p {
                margin-top: 0;
            }

            h1 {
                max-width: 720px;
                font-size: clamp(2.7rem, 6vw, 5rem);
                line-height: 1;
                margin-bottom: 18px;
                letter-spacing: -0.03em;
            }

            .section {
                padding: 52px 0;
                border-bottom: 1px solid var(--line);
            }

            .hero {
                padding: 0;
                background:
                    linear-gradient(rgba(251,254,249,0.11) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(251,254,249,0.11) 1px, transparent 1px),
                    var(--ink-2);
                background-size: 56px 56px, 56px 56px, auto;
                color: #fbfef9;
                overflow: hidden;
                position: relative;
            }

            .hero-layout {
                display: grid;
                grid-template-columns: minmax(0, 1.4fr) minmax(260px, 0.6fr);
                gap: 36px;
                align-items: end;
                min-height: 430px;
                padding: 68px 0;
                position: relative;
                z-index: 1;
            }

            h2 {
                font-size: 1.7rem;
                margin-bottom: 10px;
            }

            .section-heading {
                max-width: 760px;
                margin-bottom: 24px;
            }

            p,
            li,
            footer {
                color: var(--muted);
            }

            ul {
                padding-left: 20px;
                margin: 0;
            }

            .eyebrow {
                color: #fbfef9;
                font-size: 0.78rem;
                font-weight: 700;
                letter-spacing: 0.12em;
                text-transform: uppercase;
                margin-bottom: 12px;
            }

            .lead {
                max-width: 680px;
                font-size: 1.15rem;
                color: #f8ecef;
            }

            .hero-rail {
                color: #f4e4e7;
                display: grid;
                gap: 4px;
                margin-top: 26px;
                max-width: 420px;
            }

            .hero-rail strong {
                color: #ffffff;
            }

            .panel {
                background: var(--paper);
                border: 1px solid var(--line);
                border-top: 4px solid var(--accent);
                padding: 26px;
                position: relative;
            }

            .panel::before {
                display: none;
            }

            .panel-title {
                color: var(--ink);
                font-weight: 700;
                margin-bottom: 8px;
            }

            .status {
                display: inline-block;
                margin-top: 14px;
                padding: 6px 10px;
                border: 1px solid #e0bac1;
                color: var(--accent-dark);
                background: var(--accent-soft);
                font-size: 0.9rem;
                font-weight: 700;
            }

            .split {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 24px;
            }

            .info-block {
                background: rgba(255,255,255,0.84);
                border: 1px solid var(--line);
                padding: 24px;
                box-shadow: 0 1px 0 rgba(21, 23, 25, 0.04);
            }

            .project {
                background: var(--paper);
                border: 1px solid var(--line);
                border-left: 4px solid var(--accent);
                padding: 28px;
                max-width: 760px;
            }

            .project h3 {
                color: var(--ink);
                font-size: 1.55rem;
                margin: 0 0 8px;
            }

            .project-meta {
                color: var(--warm);
                font-size: 0.82rem;
                font-weight: 700;
                letter-spacing: 0.12em;
                text-transform: uppercase;
                margin-bottom: 10px;
            }

            .project-facts {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 12px;
                margin-top: 18px;
            }

            .project-fact {
                border: 1px solid var(--line);
                background: var(--paper);
                padding: 14px;
                color: var(--muted);
            }

            .project-fact strong {
                color: var(--ink);
            }

            .member-grid {
                display: grid;
                grid-template-columns: repeat(2, minmax(0, 1fr));
                gap: 10px 18px;
                margin-top: 18px;
                max-width: 760px;
            }

            .member {
                background: rgba(255,255,255,0.84);
                border: 1px solid var(--line);
                padding: 12px 14px;
                color: var(--ink);
                transition: border-color 140ms ease, transform 140ms ease;
            }

            .member:hover {
                border-color: var(--accent);
                transform: translateY(-1px);
            }

            .member span {
                color: var(--muted);
                font-weight: 400;
            }

            .contact-link {
                color: var(--accent-dark);
                font-weight: 700;
                text-decoration: underline;
                text-decoration-thickness: 1px;
                text-underline-offset: 4px;
            }

            .contact-box,
            .support-box {
                background: var(--paper);
                border: 1px solid var(--line);
                padding: 22px;
                max-width: 760px;
            }

            .member-note {
                background: var(--paper);
                border: 1px solid var(--line);
                border-left: 4px solid var(--warm);
                margin-top: 24px;
                padding: 22px;
                max-width: 760px;
            }

            .member-note strong {
                color: var(--ink);
            }

            footer {
                background: var(--ink-2);
                color: #f4e4e7;
                padding: 30px 0;
            }

            footer .container {
                display: flex;
                justify-content: space-between;
                gap: 18px;
                flex-wrap: wrap;
            }

            @media (max-width: 760px) {
                .nav-inner,
                .hero-layout,
                .split,
                .member-grid,
                .project-facts {
                    grid-template-columns: 1fr;
                }

                .nav-inner {
                    align-items: flex-start;
                    flex-direction: column;
                    padding: 16px 0;
                }

                .hero {
                    padding: 0;
                }

                .hero-layout {
                    min-height: auto;
                    padding: 58px 0;
                }

            }
            "#}
        </style>

        <nav class="nav">
            <div class="container nav-inner">
                <a class="brand" href="#home">
                    <img class="mark" src="logo.svg" alt="The Lab Boise logo" />
                    <span>"The Lab Boise"</span>
                </a>
                <div class="nav-links">
                    <a href="#home">"Home"</a>
                    <a href="#members">"Members"</a>
                    <a href="#electric-car">"Electric Car"</a>
                    <a href="#support">"Support"</a>
                    <a href="#contact">"Contact"</a>
                </div>
            </div>
        </nav>

        <main>
            <section id="home" class="hero section">
                <div class="container hero-layout">
                    <div>
                        <div class="eyebrow">"Engineering Organization"</div>
                        <h1>"The Lab Boise"</h1>
                        <p class="lead">
                            "The Lab Boise is an engineering organization focused on building real projects and solving technical problems."
                        </p>
                        <div class="hero-rail">
                            <span><strong>"Main Project:"</strong> " Electric Car 2026"</span>
                            <span><strong>"Location:"</strong> " Boise, Idaho"</span>
                        </div>
                    </div>
                    <div class="panel">
                        <div class="panel-title">"Electric Car 2026"</div>
                        <p>"The main project focus for The Lab Boise."</p>
                        <span class="status">"In progress"</span>
                    </div>
                </div>
            </section>

            <section id="about" class="section">
                <div class="container split">
                    <div class="info-block">
                        <h2>"About"</h2>
                        <p>
                            "The Lab Boise brings engineering work into one organized place. The focus is practical design, prototyping, testing, and turning ideas into working systems."
                        </p>
                    </div>
                    <div class="info-block">
                        <h2>"What We Work On"</h2>
                        <ul>
                            <li>"Mechanical design"</li>
                            <li>"Electrical systems"</li>
                            <li>"Software and controls"</li>
                            <li>"Testing"</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="members" class="section">
                <div class="container">
                    <div class="section-heading">
                        <h2>"Members"</h2>
                        <p>
                            "The Lab Boise is open to new members. Anyone interested in engineering, building, design, or technical projects is welcome."
                        </p>
                    </div>
                    <div class="member-grid">
                        <div class="member">"Vibodh Ayyapureddi" <span>" - Founder and Lead"</span></div>
                        <div class="member">"Jimin Ryu"</div>
                        <div class="member">"Kallen Raeder"</div>
                        <div class="member">"Blake Franks"</div>
                        <div class="member">"David Foster"</div>
                        <div class="member">"Dheemanth Majji"</div>
                        <div class="member">"Isaac Levesque"</div>
                        <div class="member">"Jaden Das"</div>
                        <div class="member">"Parker Ingram"</div>
                        <div class="member">"Parthiv Adimulam"</div>
                        <div class="member">"Andrew Coon"</div>
                        <div class="member">"Deniz Egemen"</div>
                        <div class="member">"Chinmay Tiwari"</div>
                        <div class="member">"Atharva Tripathi"</div>
                    </div>
                    <div class="member-note">
                        <p>
                            <strong>"Current members:"</strong>
                            " The Lab Boise includes people across different stages of life and experience, from high school and college students to working professionals."
                        </p>
                    </div>
                </div>
            </section>

            <section id="electric-car" class="section">
                <div class="container">
                    <div class="project">
                        <div class="project-meta">"Upcoming Project"</div>
                        <h2>"Electric Car 2026"</h2>
                        <p>"The Lab Boise is currently centered on Electric Car 2026. Planning is underway, and progress will be added here as the project develops."</p>
                    </div>
                    <div class="project-facts">
                        <div class="project-fact">
                            <strong>"Status:"</strong>
                            " Planning"
                        </div>
                        <div class="project-fact">
                            <strong>"Year:"</strong>
                            " 2026"
                        </div>
                        <div class="project-fact">
                            <strong>"Location:"</strong>
                            " Boise, Idaho"
                        </div>
                    </div>
                </div>
            </section>

            <section id="support" class="section">
                <div class="container">
                    <div class="support-box">
                        <h2>"Sponsors and Donations"</h2>
                        <p>
                            "The Lab Boise is open to sponsors, donations, materials, tools, advice, and other support for engineering projects."
                        </p>
                        <p>
                            <a class="contact-link" href="mailto:vibodhayyapureddi@gmail.com">
                                "vibodhayyapureddi@gmail.com"
                            </a>
                        </p>
                    </div>
                </div>
            </section>

            <section id="contact" class="section">
                <div class="container">
                    <h2>"Contact"</h2>
                    <div class="contact-box">
                        <p>"For questions, membership, sponsorships, donations, or anything else, email:"</p>
                        <p>
                            <a class="contact-link" href="mailto:vibodhayyapureddi@gmail.com">
                                "vibodhayyapureddi@gmail.com"
                            </a>
                        </p>
                    </div>
                </div>
            </section>
        </main>

        <footer>
            <div class="container">
                <span>"The Lab Boise · Engineering organization"</span>
                <span>"Based in Boise, Idaho"</span>
                <span>"Maintained by Vibodh Ayyapureddi"</span>
            </div>
        </footer>
    }
}
