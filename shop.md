---
layout: default
title: Shop
description: >
  The Amazing Beer Co. online shop is coming soon. Sign up to be notified
  when you can order our award-winning craft beers delivered to your door.
permalink: /shop/
---

<!-- ========================================================
     SHOP HERO — COMING SOON
     ======================================================== -->
<section
  class="page-header"
  style="min-height: 55vh; display: flex; align-items: center;"
  aria-label="Shop coming soon"
>
  <div
    class="page-header__bg"
    style="background-image: url('{{ site.baseurl }}/img/amazing_beer_9.png');"
    role="presentation"
    aria-hidden="true"
  ></div>
  <div class="page-header__content container" style="width: 100%;">
    <div class="coming-soon-badge">Coming Soon</div>
    <h1>The Amazing Beer Shop</h1>
    <p class="page-header__subtitle" style="font-size: 1.15rem; max-width: 580px; margin-inline: auto; margin-top: 0.5rem;">
      We're working hard on something great. Soon you'll be able to order
      Amazing Beer delivered straight to your front door. Be the first to know.
    </p>
    <div style="margin-top: 2rem;">
      <form class="notify-form" id="notify-form" aria-label="Email notification signup" novalidate>
        <label for="notify-email" class="visually-hidden">Your email address</label>
        <input
          type="email"
          id="notify-email"
          class="notify-form__input"
          placeholder="Enter your email address"
          required
          autocomplete="email"
        >
        <button type="submit" class="btn btn--primary">Notify Me</button>
      </form>
      <p style="color: rgba(255,255,255,0.4); font-size: 0.8rem; margin-top: 0.75rem; text-align: center;">
        No spam. Just a single email when we go live.
      </p>
    </div>
  </div>
</section>

<!-- ========================================================
     PRODUCTS PREVIEW
     ======================================================== -->
<section class="section" aria-label="Upcoming products preview">
  <div class="container">
    <header class="section-header">
      <span class="section-header__eyebrow">What's Coming</span>
      <h2>A Taste of What to Expect</h2>
      <p>
        When the shop launches, you'll be able to order all three Amazing Beer
        Co. beers in packs of 6, 12, or 24, with free delivery on orders over £30.
      </p>
    </header>
    <div class="shop-preview-grid">
      <article class="shop-preview-card">
        <img
          src="{{ site.baseurl }}/img/amazing_beer_3.png"
          alt="Golden Horizon Lager — coming to the shop soon"
          loading="lazy"
        >
        <div class="shop-preview-card__content">
          <h3>Golden Horizon Lager</h3>
          <p class="shop-preview-card__price">From £18.99</p>
          <button class="btn btn--primary" disabled aria-disabled="true">
            Coming Soon
          </button>
        </div>
      </article>
      <article class="shop-preview-card">
        <img
          src="{{ site.baseurl }}/img/amazing_beer_5.png"
          alt="Midnight Stout — coming to the shop soon"
          loading="lazy"
        >
        <div class="shop-preview-card__content">
          <h3>Midnight Stout</h3>
          <p class="shop-preview-card__price">From £21.99</p>
          <button class="btn btn--primary" disabled aria-disabled="true">
            Coming Soon
          </button>
        </div>
      </article>
      <article class="shop-preview-card">
        <img
          src="{{ site.baseurl }}/img/amazing_beer_7.png"
          alt="Hop Odyssey IPA — coming to the shop soon"
          loading="lazy"
        >
        <div class="shop-preview-card__content">
          <h3>Hop Odyssey IPA</h3>
          <p class="shop-preview-card__price">From £23.99</p>
          <button class="btn btn--primary" disabled aria-disabled="true">
            Coming Soon
          </button>
        </div>
      </article>
    </div>
  </div>
</section>

<!-- ========================================================
     PROMISES / WHAT TO EXPECT
     ======================================================== -->
<section class="section section--muted" aria-label="Shopping promises">
  <div class="container">
    <header class="section-header">
      <span class="section-header__eyebrow">Our Promises</span>
      <h2>Shop with Confidence</h2>
    </header>
    <div class="features-grid">
      <div class="feature-card">
        <span class="feature-card__icon" aria-hidden="true">🚚</span>
        <h3>Free Delivery</h3>
        <p>
          Free delivery on all orders over £30. Carefully packed to arrive
          in perfect condition at your door.
        </p>
      </div>
      <div class="feature-card">
        <span class="feature-card__icon" aria-hidden="true">❄️</span>
        <h3>Chilled Shipping</h3>
        <p>
          Temperature-controlled packaging keeps your beer fresh and cold
          throughout its entire journey to you.
        </p>
      </div>
      <div class="feature-card">
        <span class="feature-card__icon" aria-hidden="true">↩️</span>
        <h3>Satisfaction Guarantee</h3>
        <p>
          Not 100% happy? Neither are we. Contact us within 14 days for
          a full refund — no questions asked.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- ========================================================
     CTA BANNER
     ======================================================== -->
<section class="cta-banner" aria-label="Call to action">
  <div class="container">
    <h2>Can't Wait? Find Us Locally.</h2>
    <p>
      While the online shop gets ready, Amazing Beer is available at over 200
      bars, restaurants, and independent retailers across the Pacific Northwest.
    </p>
    <a href="{{ site.baseurl }}/company/" class="btn btn--dark">Learn About Us</a>
  </div>
</section>
