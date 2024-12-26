import { useState } from 'react';
import Globe from 'react-globe.gl';
import Tech from '../components/Tech.jsx'; // Adjust path as needed


import Button from '../components/Button.jsx';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('bediromanshu@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Hi, I’m Romanshu Bedi</p>
              <p className="grid-subtext">
              With a strong passion for coding, I have honed my skills in both frontend and backend development, creating dynamic and responsive websites through hands-on projects and continuous learning. I specialize in leveraging modern technologies and frameworks to build user-friendly and scalable applications. Beyond development, I enjoy solving complex problems, optimizing systems, and exploring innovative solutions to enhance user experiences.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="/assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Relevant Coursework</p>
              <ul className="grid-subtext list-disc pl-5">
                <li>Data Structures and Algorithms</li>
                <li>Machine Learning</li>
                <li>Web Application and Architecture</li>
                <li>Human-Computer Interaction (UI/UX)</li>
                <li>File and Database Management (SQL and MongoDB)</li>
                <li>Search and Planning in Artificial Intelligence</li>
                <li>Introduction to Software Engineering (Java)</li>
                
              </ul>
            </div>
          </div>
        </div>


        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[276px] h-fit flex justify-center items-center">
              <Globe
                height={350} // Match the height of other containers
                width={350}  // Match the width proportionally
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
              />
            </div>
            <div>
              <p className="grid-headtext">I’m very flexible with time zone communications & locations</p>
              <p className="grid-subtext">I&apos;m based in Edmonton, Alberta and open to remote work worldwide.</p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            {/* Removed the <img> that referenced grid3.png */}
            <div>
              {/* New heading */}
              <p className="grid-headtext">Technologies Used</p>
              
              {/* You can keep or adjust this text as needed */}
              <p className="grid-subtext">
                I love solving problems and building things through code. 
                Programming isn’t just my profession—it’s my passion. 
                I enjoy exploring new technologies, and enhancing my skills.
              </p>

              {/* Reduced from mt-8 to mt-4 to bring the icons closer */}
              <div className="mt-4">
                <Tech />
              </div>
            </div>
          </div>
        </div>



        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">bediromanshu@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;