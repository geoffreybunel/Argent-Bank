import './index.css'
import Header from './components/header'
import Hero from './components/Hero'
import Feature from './components/Feature'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <section className="features">
          <h2 className="sr-only">Features</h2>
          <Feature 
            img="icon-chat.png" 
            title="You are our #1 priority" 
            description="Need to talk to a representative? You can get in touch through our
              24/7 chat or through a phone call in less than 5 minutes." 
          />
          <Feature 
            img="icon-money.png" 
            title="More savings means higher rates" 
            description="The more you save with us, the higher your interest rate will be!" 
          />
          <Feature 
            img="icon-security.png" 
            title="Security you can trust" 
            description="We use top of the line encryption to make sure your data and money
              is always safe." 
          />
        </section>
      </main>

      <Footer />
    </>
  )
}

export default App
