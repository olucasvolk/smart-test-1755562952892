import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <div className='container mx-auto'>
        <h1 className='text-3xl font-bold text-center mt-8'>Welcome to our Online Store!</h1>
        <p className='text-lg text-center mt-4'>Explore our amazing products.</p>
      </div>
    </Layout>
  );
}