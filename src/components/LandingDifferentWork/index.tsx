import React from 'react';
import './index.css';


function ComparisonSection() {
  return (
    <section className="comparison-section container">
      <h2 className="comparison-title">Yes, It's Different. Yes, It Works.</h2>
      <p className="comparison-subtitle">
        We understand that this is not the traditional way to buy a vehicle, but<br />
        the traditional way is outdated and has some serious flaws.
      </p>

      <div className="comparison-table">
        <div className="column left">
                    <div className="column-header modern">Traditional Car Shopping
</div>

          <div className="point">
            <span className="icon">➤</span>
            <div class="margin-set">
              <h4>Time Consuming</h4>
              <p>Spend hours or days looking at cars without knowing what type of financing you can get approved for.</p>
            </div>
          </div>
          <div className="point">
            <span className="icon">➤</span>
            <div class="margin-set">
              <h4>Inefficient</h4>
              <p>Trips to multiple dealerships, negotiating with salespeople, bank appointments — the entire process can result in a lot of unnecessary stress.</p>
            </div>
          </div>
          <div className="point">
            <span className="icon">➤</span>
            <div class="margin-set">
              <h4>Potential Rejection</h4>
              <p>There is nothing worse than spending all that time finding a vehicle you love just to discover you can’t actually get approved for a loan to buy it!</p>
            </div>
          </div>
        </div>

        <div className="column right">
                              <div className="column-header modern">Canada Drives</div>

          <div className="point">
            <span className="icon blue">➤</span>
            <div class="margin-set">
              <h4>Fast & Easy</h4>
              <p>Complete our free online application in under 3 minutes from anywhere, at anytime.</p>
            </div>
          </div>
          <div className="point">
            <span className="icon blue">➤</span>
            <div class="margin-set">
              <h4>Stress-Free</h4>
              <p>Once you get pre-approved we will only show you vehicles<br/> you qualify for, so you won’t waste time looking at cars outside<br/> your budget.</p>
            </div>
          </div>
          <div className="point">
            <span className="icon blue">➤</span>
            <div class="margin-set">
              <h4>Any Credit Accepted</h4>
              <p>We believe that every Canadian should have access to the financing they need, regardless of their credit situation. No fear of rejection here!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ComparisonSection;
