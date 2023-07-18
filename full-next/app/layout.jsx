import Nav from '@/components/Nav';
import Provider from '@/components/Provider';
import '@/styles/global.css';

export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts",
};

const RootLayout = ({ children }) => (
  <html lang='en'>
    <body>
      <Provider>
        <div className='main'>
          <div className='gradient' />
        </div>
        <Nav />
        <main className='app'>
          {children}
        </main>
      </Provider>
    </body>
  </html>
);

export default RootLayout;