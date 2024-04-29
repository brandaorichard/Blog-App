import './App.css';

function App() {
  return (
    <main>
      <header>
        <a href="" className="logo">My Blog</a>
        <nav>
          <a href="" className="logo">Login</a>
          <a href="" className="logo">Register</a>
        </nav>
      </header>
      <div className="post">
        <div className="image1">
          <img src="https://techcrunch.com/wp-content/uploads/2024/04/Screenshot-2024-04-26-at-4.17.25%E2%80%AFPM.jpg?w=1390&crop=1" alt="Humanoid robots"></img>
        </div>
        <div className="texts">
          <h4>Featured Article</h4>
          <h2>Humanoid robots are learning to fall well</h2>
            <p className="info">
              <a className="author">Pitoco The Third</a>
              <time>2023-01-06 16:45</time>
            </p>
          <p className="summary">The savvy marketers at Boston Dynamics produced two major robotics news cycles last week. The larger of the two was, naturally, the electric Atlas announcement.
          The accompanying video was a celebration of the older Atlas’ journey from DARPA research project to an impressively nimble bipedal ’bot.</p>
        </div>
      </div>

      <div className="post">
        <div className="image">
          <img src="https://www.comececomopedireito.com.br/blog/wp-content/uploads/2023/03/empresas-de-ia.jpg" alt="AI vendors"></img>
        </div>
        
        <div className="texts">
          <h4>AI</h4>
          <h2>How RPA vendors aim to remain relevant in a world of AI agents</h2>
          <p className="info">
              <a className="author">Pitoco The Third</a>
              <time>2023-01-06 16:45</time>
            </p>
          <p className="summary">What’s the next big thing in enterprise automation? If you ask the tech giants, it’s agents — driven by generative AI.
          There’s no universally accepted definition of agent, but these days the term is used to describe generative AI-powered tools that can perform complex tasks through.</p>
        </div>
      </div>

      <div className="post">
        <div className="image2">
          <img src="https://techcrunch.com/wp-content/uploads/2019/06/GettyImages-655146956.jpg?w=1390&crop=1" alt="Defense tech hackathon"></img>
        </div>
        <div className="texts">
          <h4>Hardware</h4>
          <h2>London’s first defense tech hackathon brings Ukraine war closer to the city’s startups</h2>
          <p className="info">
              <a className="author">Pitoco The Third</a>
              <time>2023-01-06 16:45</time>
            </p>
          <p className="summary">
            Last week, the U.K. announced its largest ever military support package for Ukraine. The bill brings the U.K.’s total support for this financial year to £3 billion — not quite the $50 billion the U.S. pledged recently, but still substantial..
          </p>
        </div>
      </div>
    </main>
  );
}

export default App;
