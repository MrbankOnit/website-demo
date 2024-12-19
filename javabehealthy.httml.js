<!DOCTYPE html>
<html>
<head>
  <style>
    @keyframes gradientBG {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }

    body {
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      background: linear-gradient(-45deg, #ff7e5f, #feb47b, #2193b0, #6dd5ed);
      background-size: 400% 400%;
      animation: gradientBG 15s ease infinite;
      min-height: 100vh;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
    }

    .header {
      text-align: center;
      color: white;
      padding: 40px 0;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
    }

    .quote-container {
      background: rgba(255, 255, 255, 0.95);
      border-radius: 15px;
      padding: 30px;
      margin: 20px 0;
      box-shadow: 0 10px 20px rgba(0,0,0,0.1);
      transition: transform 0.3s ease;
    }

    .quote-container:hover {
      transform: translateY(-5px);
    }

    .quote {
      font-size: 24px;
      color: #333;
      font-style: italic;
      margin-bottom: 10px;
      line-height: 1.4;
    }

    .author {
      color: #666;
      text-align: right;
      font-size: 18px;
    }

    .content-section {
      background: rgba(255, 255, 255, 0.95);
      border-radius: 15px;
      padding: 30px;
      margin: 20px 0;
      color: #333;
    }

    .activity-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
      margin-top: 20px;
    }

    .activity-card {
      background: white;
      border-radius: 10px;
      padding: 20px;
      text-align: center;
      box-shadow: 0 5px 15px rgba(0,0,0,0.1);
      transition: transform 0.3s ease;
    }

    .activity-card:hover {
      transform: translateY(-5px);
    }

    .emoji {
      font-size: 48px;
      margin-bottom: 10px;
    }

    .progress-tracker {
      background: white;
      border-radius: 10px;
      padding: 20px;
      margin-top: 20px;
    }

    .progress-bar {
      height: 20px;
      background: #f0f0f0;
      border-radius: 10px;
      overflow: hidden;
      margin: 10px 0;
    }

    .progress {
      height: 100%;
      background: linear-gradient(90deg, #2193b0, #6dd5ed);
      border-radius: 10px;
      transition: width 1s ease;
    }

    .button {
      background: linear-gradient(90deg, #ff7e5f, #feb47b);
      color: white;
      border: none;
      padding: 15px 30px;
      border-radius: 25px;
      font-size: 18px;
      cursor: pointer;
      transition: transform 0.3s ease;
      margin-top: 20px;
      display: inline-block;
      text-decoration: none;
    }

    .button:hover {
      transform: translateY(-2px);
    }
  </style>
</head>
<body>
<div class="container">
  <header class="header">
    <h1>Transform Your Life Through Fitness</h1>
    <p>Every step forward is progress, no matter how small</p>
  </header>

  <div class="quote-container">
    <p class="quote">"The only bad workout is the one that didn't happen."</p>
    <p class="author">- Unknown</p>
  </div>

  <div class="content-section">
    <h2>Find Your Perfect Activity</h2>
    <p>The key to sticking with a workout routine is finding something you enjoy doing. When you're having fun, you're more likely to stick with it in the long run.</p>
    <div class="activity-grid">
      <div class="activity-card">
        <div class="emoji">💃</div>
        <h3>Dancing</h3>
        <p>Express yourself through movement</p>
      </div>
      <div class="activity-card">
        <div class="emoji">⚽</div>
        <h3>Sports</h3>
        <p>Join a team and stay motivated</p>
      </div>
      <div class="activity-card">
        <div class="emoji">🏃‍♀️</div>
        <h3>Running</h3>
        <p>Set your own pace and goals</p>
      </div>
      <div class="activity-card">
        <div class="emoji">🏔️</div>
        <h3>Hiking</h3>
        <p>Connect with nature while staying fit</p>
      </div>
    </div>
  </div>

  <div class="quote-container">
    <p class="quote">"It's not about being the best, it's about being better than you were yesterday."</p>
    <p class="author">- Unknown</p>
  </div>

  <div class="content-section">
    <h2>Set Realistic Goals</h2>
    <p>Don't try to do too much too soon. Start with small, achievable goals and gradually increase the intensity and duration of your workouts as you get fitter.</p>
    <div class="progress-tracker">
      <h3>Your Progress Journey</h3>
      <div>
        <p>Week 1 Goal: 3 workouts</p>
        <div class="progress-bar">
          <div class="progress" style="width: 100%"></div>
        </div>
      </div>
      <div>
        <p>Week 2 Goal: 4 workouts</p>
        <div class="progress-bar">
          <div class="progress" style="width: 75%"></div>
        </div>
      </div>
      <div>
        <p>Week 3 Goal: 5 workouts</p>
        <div class="progress-bar">
          <div class="progress" style="width: 40%"></div>
        </div>
      </div>
    </div>

    <a href="#" class="button">Start Your Journey Today</a>
  </div>

  <div class="quote-container">
    <p class="quote">"Your body can stand almost anything. It's your mind that you have to convince."</p>
    <p class="author">- Unknown</p>
  </div>
</div>

<script>
  // Add smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Animate progress bars on scroll
  function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress');
    progressBars.forEach(bar => {
      const rect = bar.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        bar.style.width = bar.parentElement.dataset.progress + '%';
      }
    });
  }

  window.addEventListener('scroll', animateProgressBars);
  window.addEventListener('load', animateProgressBars);
</script>
</body>
</html>
