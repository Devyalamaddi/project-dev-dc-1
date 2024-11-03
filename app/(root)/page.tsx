import { MailIcon } from 'lucide-react';
import React from 'react';

const HomePage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-8">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent font-serif">Welcome ALL </h1>
      </header>

      <section className="mb-8 container ">
        <h2 className="text-3xl font-semibold text-white text-center">About Me</h2>
        <p className="mt-4 text-base text-white text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui magni recusandae fuga quisquam doloribus aut eveniet temporibus labore. Dolores nostrum pariatur molestias quaerat dicta perferendis, ducimus qui nulla similique voluptate! Cupiditate quod fugit culpa tempora perferendis fuga at id dolorem corporis eum cumque suscipit officiis sed laboriosam distinctio nemo ad numquam, facere quia officia non dolor dicta? Neque eum quasi reprehenderit, qui amet impedit excepturi aliquid quos non magni deleniti? Architecto praesentium assumenda repellat. Qui alias temporibus magni a similique officia reprehenderit, aliquam error, nostrum, beatae veniam iste! Veniam voluptatum voluptate odit vel a maxime ratione pariatur, ipsa fuga nam aut quisquam enim nobis provident iusto dicta. Rem totam eveniet hic sit id temporibus sint ab sapiente? Suscipit quam quas eius, enim fugiat a similique animi, magni ab porro rerum quae! Nam sed, obcaecati eos a omnis voluptatum iusto repudiandae est modi eligendi voluptatibus. Vero, porro repudiandae excepturi eius aut maxime? Consectetur quae ipsam, optio eligendi illo hic amet nulla! Officiis excepturi voluptate non optio beatae facilis debitis quos modi, odio placeat cumque voluptates architecto ratione sit vero ad commodi veritatis atque, porro, nisi soluta! Molestias officiis ab accusantium quae libero! Sunt a itaque harum veniam eos, inventore quod ut!
        </p>
      </section>

      <footer className="mt-10 text-center">
        <p className="text-base text-white pb-5">Thank you for visiting! Feel free to get in touch.</p>
        {/* <a href="devendrayalamaddi@gmail.com" className="text-green-600 hover:underline mt-2">Contact Me</a> */}
      
        <div className="flex justify-center">
          <a
            href="mailto:devendrayalamaddi@gmail.com"
            className="group flex w-56 gap-3 justify-center items-center py-2 px-4 text-white bg-gradient-to-r from-blue-500 to-green-500 rounded hover:from-blue-600 hover:to-green-600 transition"
          >
            <MailIcon className="inline m-1 mb-2 transform transition-transform duration-300 ease-in-out group-hover:translate-x-32" />
            <span className='transform transition-transform duration-300 ease-in-out group-hover:-translate-x-5'>Contact me</span>
          </a>
        </div>
        


      </footer>
    </div>
  );
};

export default HomePage;
