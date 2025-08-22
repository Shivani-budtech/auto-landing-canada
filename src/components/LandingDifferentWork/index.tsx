import React from 'react';
import './index.css';


function ComparisonSection() {
  return (
    <section className="comparison-section container">
      <h2 className="comparison-title">A Smarter Way to Buy. A Better Way to Drive.</h2>
      <p className="comparison-subtitle">
        We don’t follow the outdated way of doing things. Instead, we’ve created a system that’s built to actually work.
      </p>

      <div className="comparison-table">
        <div className="column left">
                    <div className="column-header modern_two">Traditional Car Shopping
</div>

          <div className="point">
            <span className="icon-gray">➤</span>
            <div class="margin-set">
              <h4>Takes Too Much Time</h4>
              <p>Browsing lots and websites for days, without a clue if you’ll get approved, is frustrating.</p>
            </div>
          </div>
          <div className="point">
            <span className="icon-gray">➤</span>
            <div class="margin-set">
              <h4>Too Many Hoops</h4>
              <p>Multiple dealerships, pushy sales tactics, and back-and-forth with banks — it’s exhausting.</p>
            </div>
          </div>
          <div className="point">
            <span className="icon-gray">➤</span>
            <div class="margin-set">
              <h4>Disappointing Outcomes</h4>
              <p>Imagine finding your dream car, only to be told you don’t qualify for the financing.</p>
            </div>
          </div>
        </div>

        <div className="column right">
                              <div className="column-header modern">Auto Lending Canada</div>

          <div className="point">
            <span className="icon blue">➤</span>
            <div class="margin-set">
              <h4>Easy to Start</h4>
              <p>It takes less than 3 minutes to apply online, whenever and wherever it works for you.</p>
            </div>
          </div>
          <div className="point">
            <span className="icon blue">➤</span>
            <div class="margin-set">
              <h4>Hassle-Free</h4>
              <p>We’ll match you with cars you’re already approved for, so you don’t waste time falling for ones outside your reach.</p>
            </div>
          </div>
          <div className="point">
            <span className="icon blue">➤</span>
            <div class="margin-set">
              <h4>Approval for Everyone</h4>
              <p>Your credit situation shouldn’t hold you back. We welcome all credit types with no fear of rejection.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ComparisonSection;
