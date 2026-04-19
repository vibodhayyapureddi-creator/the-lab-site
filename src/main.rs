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
                --bg: #f3f5f2;
                --paper: #ffffff;
                --ink: #151719;
                --ink-2: #202529;
                --muted: #5f666d;
                --line: #d8ddd6;
                --accent: #15616d;
                --accent-dark: #0d3f47;
                --accent-soft: #dfecea;
                --warm: #c46d3b;
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
                    linear-gradient(rgba(21, 97, 109, 0.045) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(21, 97, 109, 0.045) 1px, transparent 1px),
                    var(--bg);
                background-size: 48px 48px;
                font-size: 16px;
                line-height: 1.6;
            }

            a {
                color: inherit;
                text-decoration: none;
            }

            .container {
                width: min(960px, calc(100% - 32px));
                margin: 0 auto;
            }

            .nav {
                background: rgba(244, 245, 241, 0.92);
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
                width: 28px;
                height: 28px;
                border: 2px solid var(--accent);
                display: grid;
                place-items: center;
                color: var(--accent);
                font-size: 0.85rem;
                line-height: 1;
                transform: rotate(-3deg);
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
                padding: 58px 0;
                border-bottom: 1px solid var(--line);
            }

            .hero {
                padding: 0;
                background:
                    linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px),
                    var(--ink-2);
                background-size: 42px 42px;
                color: #f7f8f3;
                overflow: hidden;
                position: relative;
            }

            .hero::after {
                content: "2026";
                position: absolute;
                right: max(18px, calc((100vw - 960px) / 2));
                top: 28px;
                color: rgba(255,255,255,0.055);
                font-size: clamp(5rem, 18vw, 14rem);
                font-weight: 800;
                line-height: 1;
                letter-spacing: -0.08em;
                pointer-events: none;
            }

            .hero-layout {
                display: grid;
                grid-template-columns: minmax(0, 1.4fr) minmax(260px, 0.6fr);
                gap: 36px;
                align-items: end;
                min-height: 520px;
                padding: 88px 0;
                position: relative;
                z-index: 1;
            }

            h2 {
                font-size: 1.7rem;
                margin-bottom: 10px;
            }

            .section-label {
                color: var(--warm);
                font-size: 0.78rem;
                font-weight: 800;
                letter-spacing: 0.12em;
                text-transform: uppercase;
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
                color: #8ed1c7;
                font-size: 0.78rem;
                font-weight: 700;
                letter-spacing: 0.12em;
                text-transform: uppercase;
                margin-bottom: 12px;
            }

            .lead {
                max-width: 680px;
                font-size: 1.15rem;
                color: #d8dedb;
            }

            .hero-tags {
                display: flex;
                flex-wrap: wrap;
                gap: 10px;
                margin-top: 28px;
            }

            .tag {
                border: 1px solid rgba(255,255,255,0.22);
                color: #e8efed;
                padding: 7px 10px;
                font-size: 0.88rem;
            }

            .hero-rail {
                border-left: 2px solid var(--warm);
                color: #cfd8d5;
                display: grid;
                gap: 4px;
                margin-top: 30px;
                padding-left: 14px;
                max-width: 420px;
            }

            .hero-rail strong {
                color: #ffffff;
            }

            .panel {
                background: var(--paper);
                border: 1px solid var(--line);
                box-shadow: 10px 10px 0 rgba(21, 97, 109, 0.10);
                padding: 26px;
                position: relative;
            }

            .panel::before {
                content: "";
                position: absolute;
                inset: 10px 10px auto auto;
                width: 44px;
                height: 44px;
                border-top: 2px solid var(--accent);
                border-right: 2px solid var(--accent);
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
                border: 1px solid #b8c8c5;
                color: var(--accent-dark);
                background: var(--accent-soft);
                font-size: 0.9rem;
                font-weight: 700;
            }

            .spec-list {
                display: grid;
                gap: 10px;
                margin-top: 18px;
                padding-top: 18px;
                border-top: 1px solid var(--line);
            }

            .spec-row {
                display: flex;
                justify-content: space-between;
                gap: 18px;
                color: var(--muted);
                font-size: 0.95rem;
                border-bottom: 1px solid #eef0eb;
                padding-bottom: 8px;
            }

            .spec-row strong {
                color: var(--ink);
                font-weight: 700;
            }

            .split {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 24px;
            }

            .info-block {
                background: rgba(255,255,255,0.64);
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
                box-shadow: 8px 8px 0 rgba(196, 109, 59, 0.10);
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

            .project-grid {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 14px;
                margin-top: 22px;
            }

            .project-detail {
                border: 1px solid var(--line);
                background: rgba(255,255,255,0.72);
                padding: 18px;
            }

            .project-detail strong {
                display: block;
                color: var(--ink);
                margin-bottom: 6px;
            }

            .timeline {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 0;
                margin-top: 18px;
                max-width: 760px;
                border: 1px solid var(--line);
                background: var(--paper);
            }

            .timeline-step {
                padding: 16px;
                border-right: 1px solid var(--line);
            }

            .timeline-step:last-child {
                border-right: 0;
            }

            .timeline-step span {
                color: var(--warm);
                display: block;
                font-size: 0.78rem;
                font-weight: 800;
                letter-spacing: 0.12em;
                margin-bottom: 6px;
                text-transform: uppercase;
            }

            .timeline-step strong {
                color: var(--ink);
                display: block;
            }

            .timeline-step.active {
                background: var(--accent-soft);
            }

            .member-grid {
                display: grid;
                grid-template-columns: repeat(2, minmax(0, 1fr));
                gap: 10px 18px;
                margin-top: 18px;
                max-width: 760px;
            }

            .member {
                background: rgba(255,255,255,0.64);
                border: 1px solid var(--line);
                padding: 12px 14px;
                color: var(--ink);
                transition: border-color 140ms ease, transform 140ms ease;
            }

            .member:hover {
                border-color: #b8c8c5;
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
                color: #cfd8d5;
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
                .project-grid,
                .member-grid,
                .timeline {
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

                .timeline-step {
                    border-right: 0;
                    border-bottom: 1px solid var(--line);
                }

                .timeline-step:last-child {
                    border-bottom: 0;
                }
            }
            "#}
        </style>

        <nav class="nav">
            <div class="container nav-inner">
                <a class="brand" href="#home">
                    <span class="mark">"L"</span>
                    <span>"The Lab"</span>
                </a>
                <div class="nav-links">
                    <a href="#home">"Home"</a>
                    <a href="#members">"Members"</a>
                    <a href="#projects">"Upcoming Projects"</a>
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
                        <h1>"The Lab"</h1>
                        <p class="lead">
                            "The Lab is an engineering organization focused on building real projects and solving technical problems."
                        </p>
                        <div class="hero-tags">
                            <span class="tag">"Design"</span>
                            <span class="tag">"Prototype"</span>
                            <span class="tag">"Test"</span>
                            <span class="tag">"Build"</span>
                        </div>
                        <div class="hero-rail">
                            <span><strong>"Main Project:"</strong> " Electric Car 2026"</span>
                            <span><strong>"Open To:"</strong> " Builders, designers, and problem solvers"</span>
                        </div>
                    </div>
                    <div class="panel">
                        <div class="panel-title">"Electric Car 2026"</div>
                        <p>"The main project focus for The Lab."</p>
                        <span class="status">"In progress"</span>
                        <div class="spec-list">
                            <div class="spec-row">
                                <span>"Project"</span>
                                <strong>"Electric Car 2026"</strong>
                            </div>
                            <div class="spec-row">
                                <span>"Phase"</span>
                                <strong>"Planning"</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="about" class="section">
                <div class="container split">
                    <div class="info-block">
                        <div class="section-label">"01 / About"</div>
                        <h2>"About"</h2>
                        <p>
                            "The Lab brings engineering work into one organized place. The focus is practical design, prototyping, testing, and turning ideas into working systems."
                        </p>
                    </div>
                    <div class="info-block">
                        <div class="section-label">"02 / Work"</div>
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
                        <div class="section-label">"03 / Members"</div>
                        <h2>"Members"</h2>
                        <p>
                            "The Lab is open to new members. Anyone interested in engineering, building, design, or technical projects is welcome."
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
                            " The Lab includes people across different stages of life and experience, from high school and college students to working professionals."
                        </p>
                    </div>
                </div>
            </section>

            <section id="projects" class="section">
                <div class="container">
                    <div class="section-heading">
                        <div class="section-label">"04 / Project"</div>
                        <h2>"Upcoming Projects"</h2>
                        <p>"The Lab is currently centered on one main project."</p>
                    </div>
                    <div class="project">
                        <div class="project-meta">"2026 Focus Project"</div>
                        <h3>"Electric Car 2026"</h3>
                        <p>"The Lab's focus project for 2026 is an electric car. Planning is underway, with more details coming as the project develops."</p>
                    </div>
                </div>
            </section>

            <section id="electric-car" class="section">
                <div class="container">
                    <div class="section-heading">
                        <div class="section-label">"05 / Focus"</div>
                        <h2>"Electric Car 2026"</h2>
                        <p>
                            "Electric Car 2026 is the main engineering project for The Lab."
                        </p>
                    </div>
                    <div class="timeline">
                        <div class="timeline-step">
                            <span>"Step 01"</span>
                            <strong>"Concept"</strong>
                        </div>
                        <div class="timeline-step active">
                            <span>"Step 02"</span>
                            <strong>"Planning"</strong>
                        </div>
                        <div class="timeline-step">
                            <span>"Step 03"</span>
                            <strong>"Build"</strong>
                        </div>
                    </div>
                    <div class="project-grid">
                        <div class="project-detail">
                            <strong>"Goal"</strong>
                            <p>"Develop a small electric vehicle project from planning through testing."</p>
                        </div>
                        <div class="project-detail">
                            <strong>"Status"</strong>
                            <p>"Planning and early project setup."</p>
                        </div>
                        <div class="project-detail">
                            <strong>"Updates"</strong>
                            <p>"Progress will be added here as the project develops."</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="support" class="section">
                <div class="container">
                    <div class="support-box">
                        <div class="section-label">"06 / Support"</div>
                        <h2>"Sponsors and Donations"</h2>
                        <p>
                            "The Lab is open to sponsors, donations, materials, tools, advice, and other support for engineering projects."
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
                    <div class="section-label">"07 / Contact"</div>
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
                <span>"The Lab · Engineering organization"</span>
                <span>"Maintained by Vibodh Ayyapureddi"</span>
            </div>
        </footer>
    }
}
