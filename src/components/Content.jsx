import React, { useEffect, useRef } from 'react';
import './Content.css';

function Content() {
  const aboutUsRef = useRef(null);
  const missionRef = useRef(null);

  useEffect(() => {
    const options = {
      threshold: 0.1 // Trigger when 10% of the element is visible
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target); // Stop observing once animation is triggered
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (aboutUsRef.current) observer.observe(aboutUsRef.current);
    if (missionRef.current) observer.observe(missionRef.current);

    return () => {
      if (aboutUsRef.current) observer.unobserve(aboutUsRef.current);
      if (missionRef.current) observer.unobserve(missionRef.current);
    };
  }, []);

  return (
    <div className="container">
      <div className="About-Us" ref={aboutUsRef}>
        <h1>About Us</h1>
        <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, consequatur. Ex labore, consequatur dolorem sequi aliquam quis ullam doloribus accusamus alias architecto voluptas ratione repellendus! Delectus accusamus a est voluptates.
        Error magnam, velit quos sunt laboriosam sit, maxime debitis qui cupiditate assumenda aperiam voluptate autem ea vitae nesciunt voluptatem mollitia. Accusantium numquam aperiam quas, ratione molestiae rem quam eaque minima!
        Nulla, debitis fuga! Doloribus expedita veritatis minus. Officiis libero soluta, placeat minima recusandae corrupti molestias, blanditiis est illum sed quos! Ab soluta tempore atque eligendi recusandae quis quo perferendis ipsam?
        Distinctio unde quasi odio ipsum aspernatur id illo saepe quod impedit, numquam pariatur voluptatibus officiis deleniti repudiandae ullam natus ea eveniet, et ad minus consectetur rerum. Molestiae reiciendis iure impedit.
        Laborum blanditiis alias sit nobis praesentium vitae amet quia quis ut quasi repudiandae cupiditate assumenda sed, provident aperiam distinctio necessitatibus placeat mollitia numquam. Corporis cumque, voluptatum quos aut commodi dolores.
        Illo magnam accusamus totam nisi officia quibusdam architecto eaque asperiores laboriosam ad voluptatum beatae ut reiciendis, eius minus sed sit, consequuntur necessitatibus molestias animi repellendus, omnis blanditiis ullam et? Perferendis!
        Quia aperiam enim illum in neque voluptas ipsa repudiandae officiis dolores doloremque. Quisquam nobis nostrum voluptatem fugiat porro? Enim unde laborum quasi nulla eligendi exercitationem repellat ab consequuntur vel adipisci?
        Eius quas delectus repellendus reprehenderit. Quis, perspiciatis. Distinctio, possimus blanditiis! Corporis nemo voluptatum sint ipsam quidem, consequatur illo, a deleniti sed, doloremque sit! Tempore, voluptates est. Ex sapiente cumque facilis?
        Id cum facilis pariatur voluptatibus molestiae, alias tempore, tempora dolores iure adipisci voluptate quasi, fugiat a minus nemo nisi. Optio incidunt esse excepturi consequuntur aspernatur tempore ut quis sunt ex.
        Laboriosam impedit repellat adipisci obcaecati minus. Amet, voluptatem asperiores magni excepturi facere voluptatum cumque saepe expedita vero? Ab accusantium sint pariatur animi doloribus voluptatem laborum aliquid, nemo aperiam sunt atque?
        </p>
      </div>
      <div className="Our-Mission" ref={missionRef}>
        <h1>Our Mission</h1>
        <p>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur iste fugit quod vel doloremque! Similique nemo deserunt aperiam quasi accusamus, dolore natus animi iure temporibus facilis, ullam nisi quaerat laudantium?
         Sunt quibusdam laborum eveniet itaque et harum. Suscipit repellendus sapiente rerum sed dolor soluta totam eligendi earum voluptatibus laboriosam adipisci expedita possimus alias, voluptatem rem itaque quis ipsam, magnam quia?
         Perferendis nulla quibusdam architecto repellendus nisi id amet quidem sed reiciendis magnam nam doloribus consequatur cum quo placeat obcaecati, illo illum porro sit non totam quia accusantium eius! Deserunt, dolorem!
         Error facilis sunt eligendi, illo maxime porro, culpa distinctio consectetur delectus eum debitis dolore tempora vero, quam laboriosam. Corrupti modi nobis dicta nulla velit alias voluptate, illo laborum totam optio!
         Magni, cupiditate. Veritatis, excepturi a quia tempore dignissimos et quo maxime sunt molestiae? Blanditiis ullam voluptatum, eligendi repellendus perferendis ipsum incidunt eos nisi. Dicta totam atque eos, quos quidem ea.
         Explicabo aliquid ipsa omnis corrupti odio quaerat sint ducimus repellendus incidunt doloribus laudantium, distinctio itaque id dolor nesciunt, consequuntur voluptates eligendi modi nostrum eaque voluptas velit accusamus at unde. At.
         Alias quo iusto expedita distinctio quasi dolore tempore optio doloremque natus voluptatum modi odit dicta eius suscipit fugiat debitis laboriosam explicabo vel facere ratione, officia doloribus? Eum, velit? Eius, vero!
         Modi impedit eligendi cum magni. Vitae excepturi ipsa illum omnis ex praesentium delectus voluptates, amet officiis ullam. Repellat illum suscipit quod optio temporibus animi labore minus numquam omnis, architecto deleniti?
         Id ducimus unde necessitatibus cumque asperiores repellat eos aliquid voluptas fugiat reiciendis dolorum temporibus obcaecati, blanditiis labore atque explicabo soluta perferendis, ea velit maiores nisi suscipit amet nulla? Deleniti, repellat.
         Ipsa saepe quaerat, maiores repudiandae libero totam illo magni. Ratione, aut non explicabo possimus minima blanditiis deserunt quo accusamus ipsa vero sed suscipit. Cumque eos autem, laborum a voluptatem quisquam!
        </p>
      </div>
    </div>
  );
}

export default Content;
