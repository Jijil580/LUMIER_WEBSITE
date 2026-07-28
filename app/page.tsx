const Arrow = () => <span aria-hidden="true">↗</span>;

const Check = ({ children }: { children: React.ReactNode }) => (
  <li><span aria-hidden="true">✓</span>{children}</li>
);

export default function Home() {
  return (
    <main>
      <section className="hero" id="home">
        <div className="nav-wrap">
          <nav className="nav" aria-label="Main navigation">
            <a className="brand" href="#home" aria-label="Lumier Technologies home">
              <span className="brand-mark" aria-hidden="true"><i>L</i><i>T</i></span>
              <span className="brand-name">LUMIER<br /><b>TECHNOLOGIES</b></span>
            </a>
            <div className="nav-links">
              <a href="#products">Products</a>
              <a href="#solutions">Solutions</a>
              <a href="#company">Company</a>
            </div>
            <a className="nav-cta" href="#contact">Let&apos;s talk <Arrow /></a>
          </nav>
        </div>

        <div className="hero-grid shell">
          <div className="hero-copy">
            <p className="eyebrow"><span /> Built for ambitious businesses</p>
            <h1>Technology that keeps your business <em>moving forward.</em></h1>
            <p className="hero-lede">Lumier Technologies creates practical digital products that connect operations, simplify retail, and turn everyday work into measurable progress.</p>
            <div className="hero-actions">
              <a className="button button-light" href="#products">Explore our products <Arrow /></a>
              <a className="text-link" href="#contact">Discuss your project <span>→</span></a>
            </div>
            <div className="hero-proof">
              <div><strong>01</strong><span>Operations,<br />connected</span></div>
              <div><strong>02</strong><span>Decisions,<br />made clearer</span></div>
              <div><strong>03</strong><span>Growth,<br />made simpler</span></div>
            </div>
          </div>

          <div className="product-stage" aria-label="Lumier product interface preview">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="dashboard-card">
              <div className="dash-top">
                <span className="mini-logo">L</span>
                <span className="dash-title">Business overview</span>
                <span className="avatar">AK</span>
              </div>
              <div className="dash-body">
                <div className="dash-sidebar"><i /><i /><i /><i /><i /></div>
                <div className="dash-main">
                  <p>Good morning</p>
                  <h3>Everything is on track.</h3>
                  <div className="metric-row">
                    <div><span>Net sales</span><b>₹ 8.42L</b><small>↑ Today</small></div>
                    <div><span>Active projects</span><b>24</b><small>6 due soon</small></div>
                  </div>
                  <div className="chart-card">
                    <div className="chart-head"><span>Performance</span><b>This week</b></div>
                    <div className="bars"><i /><i /><i /><i /><i /><i /><i /></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="float-card float-stock"><span>Inventory health</span><strong>94%</strong><i><b /></i></div>
            <div className="float-card float-sync"><span className="pulse">✓</span><div><strong>All systems synced</strong><small>Updated just now</small></div></div>
          </div>
        </div>
        <div className="hero-bottom">Product thinking <span>•</span> Reliable engineering <span>•</span> Lasting partnerships</div>
      </section>

      <section className="intro shell" id="company">
        <p className="section-label">What we do</p>
        <div>
          <h2>We turn complex business workflows into software that feels <em>remarkably simple.</em></h2>
          <p>From daily operations to the retail counter, our products help teams work with clarity, confidence, and control.</p>
        </div>
      </section>

      <section className="products shell" id="products">
        <div className="section-heading">
          <div><p className="section-label">Our products</p><h2>Made for real work.</h2></div>
          <p>Purpose-built platforms that bring people, processes, and performance together.</p>
        </div>

        <article className="product-card brickflow-card">
          <div className="product-copy">
            <span className="product-number">01 / Manufacturing operations</span>
            <div className="product-icon">BF</div>
            <h3>BrickFlow</h3>
            <p className="product-tagline">The complete company manager for interlock &amp; hollow-brick businesses.</p>
            <p>Connect orders, production, materials, stock, deliveries, cash flow, staff, and customers in one purpose-built workspace.</p>
            <ul>
              <Check>Production and raw-material tracking</Check>
              <Check>Orders, dispatch, and customer accounts</Check>
              <Check>Cash flow, teams, and business reports</Check>
            </ul>
            <a className="button button-dark" href="#contact">Discover BrickFlow <Arrow /></a>
          </div>
          <div className="brickflow-visual">
            <div className="brick-yard" aria-hidden="true">
              <div className="hollow-stack"><i /><i /><i /><i /><i /><i /></div>
              <div className="paver-stack"><i /><i /><i /><i /><i /><i /><i /><i /></div>
              <span>Production yard</span>
            </div>
            <div className="phone phone-back">
              <div className="phone-screen"><span>Payments</span><strong>₹ 1,28,500</strong><div className="donut" /><small>On track this month</small></div>
            </div>
            <div className="phone phone-front">
              <div className="phone-screen"><div className="phone-welcome"><span>BRICKFLOW</span><b>•••</b></div><p>Good afternoon</p><h4>Your factory</h4><div className="quick-grid"><i>Production</i><i>Cash flow</i><i>Dispatch</i><i>Reports</i></div><div className="task-line"><span>Today&apos;s activity</span><b>12 updates</b></div><div className="mini-list"><i /><i /><i /></div></div>
            </div>
          </div>
        </article>

        <article className="product-card retail-card">
          <div className="retail-visual">
            <div className="retail-shelf" aria-hidden="true">
              <span className="product-box tall">A</span><span className="product-bottle">B</span><span className="product-box">C</span><span className="product-jar">D</span><span className="product-box wide">E</span>
            </div>
            <div className="pos-window">
              <div className="pos-bar"><span className="pos-logo">R</span><b>RETAIL BOSS</b><span>Register 01</span></div>
              <div className="pos-content">
                <div className="pos-products"><p>Popular items</p><div className="tile-grid"><i><b>01</b><span>Essentials</span></i><i><b>02</b><span>Home</span></i><i><b>03</b><span>Personal</span></i><i><b>04</b><span>Offers</span></i></div></div>
                <div className="pos-bill"><p>Current sale</p><span>4 items</span><div className="bill-lines"><i /><i /><i /><i /></div><div className="total"><span>Total</span><b>₹ 2,840</b></div><button>Complete sale →</button></div>
              </div>
            </div>
            <div className="sales-chip"><span>Today&apos;s sales</span><strong>₹ 48,620</strong><small>↑ 12.4% from yesterday</small></div>
          </div>
          <div className="product-copy">
            <span className="product-number">02 / Retail</span>
            <div className="product-icon retail-icon">RB</div>
            <h3>Retail Boss</h3>
            <p className="product-tagline">Run your store. Know your business.</p>
            <p>A modern retail platform for billing, inventory, customer insights, and store performance—from one intuitive screen.</p>
            <ul>
              <Check>Fast, effortless point of sale</Check>
              <Check>Live inventory and sales tracking</Check>
              <Check>Actionable retail analytics</Check>
            </ul>
            <a className="button button-blue" href="#contact">Discover Retail Boss <Arrow /></a>
          </div>
        </article>
      </section>

      <section className="solutions" id="solutions">
        <div className="shell">
          <div className="section-heading light-heading">
            <div><p className="section-label">Beyond products</p><h2>Digital solutions,<br />built around you.</h2></div>
            <p>Need something more specific? We design and engineer business technology shaped around your goals.</p>
          </div>
          <div className="service-grid">
            <article><span>01</span><div className="service-symbol">⌁</div><h3>Custom software</h3><p>Tailored platforms that streamline how your business operates.</p><a href="#contact" aria-label="Learn about custom software">↗</a></article>
            <article><span>02</span><div className="service-symbol">◎</div><h3>Web &amp; mobile apps</h3><p>Fast, intuitive experiences designed for customers and teams.</p><a href="#contact" aria-label="Learn about web and mobile apps">↗</a></article>
            <article><span>03</span><div className="service-symbol">◇</div><h3>Cloud &amp; integration</h3><p>Connected systems that keep your information moving securely.</p><a href="#contact" aria-label="Learn about cloud integration">↗</a></article>
            <article><span>04</span><div className="service-symbol">✦</div><h3>Technology consulting</h3><p>Clear, practical guidance for your next digital decision.</p><a href="#contact" aria-label="Learn about technology consulting">↗</a></article>
          </div>
        </div>
      </section>

      <section className="approach shell">
        <div className="approach-copy">
          <p className="section-label">How we work</p>
          <h2>Clear thinking.<br /><em>Strong execution.</em></h2>
          <p>We stay close to the problem, communicate openly, and build with the long term in mind.</p>
          <a className="text-link dark-link" href="#contact">Start a conversation <span>→</span></a>
        </div>
        <div className="steps">
          <article><span>01</span><div><h3>Understand</h3><p>We learn your business, users, and real-world constraints.</p></div></article>
          <article><span>02</span><div><h3>Design</h3><p>We shape a focused solution that is easy to use and ready to scale.</p></div></article>
          <article><span>03</span><div><h3>Build</h3><p>We engineer, test, and refine with care at every stage.</p></div></article>
          <article><span>04</span><div><h3>Grow</h3><p>We support, improve, and evolve the product alongside your business.</p></div></article>
        </div>
      </section>

      <section className="contact shell" id="contact">
        <div className="contact-orb">L</div>
        <div className="contact-copy">
          <p className="section-label">Let&apos;s build what&apos;s next</p>
          <h2>Have a challenge in mind?</h2>
          <p>Tell us where you want to go. We&apos;ll help you find the clearest way forward.</p>
        </div>
        <div className="contact-actions">
          <a className="contact-button whatsapp-button" href="https://wa.me/919645049580?text=Hello%20Lumier%20Technologies%2C%20I%27d%20like%20to%20discuss%20a%20project." target="_blank" rel="noopener noreferrer" aria-label="Chat with Lumier Technologies on WhatsApp">
            <span className="whatsapp-mark" aria-hidden="true">◉</span>
            Chat on WhatsApp
            <small>+91 96450 49580</small>
          </a>
          <a className="contact-email" href="mailto:sales@lumiertechnologies.com">Or send us an email <Arrow /></a>
        </div>
      </section>

      <footer>
        <div className="shell footer-main">
          <a className="brand footer-brand" href="#home"><span className="brand-mark" aria-hidden="true"><i>L</i><i>T</i></span><span className="brand-name">LUMIER<br /><b>TECHNOLOGIES</b></span></a>
          <p>Thoughtful technology for better business.</p>
          <div className="footer-links"><a href="#products">Products</a><a href="#solutions">Solutions</a><a href="#company">Company</a><a href="https://wa.me/919645049580?text=Hello%20Lumier%20Technologies%2C%20I%27d%20like%20to%20discuss%20a%20project." target="_blank" rel="noopener noreferrer">WhatsApp</a></div>
        </div>
        <div className="shell footer-bottom"><span>© 2026 Lumier Technologies. All rights reserved.</span><a href="#home">Back to top ↑</a></div>
      </footer>
    </main>
  );
}
