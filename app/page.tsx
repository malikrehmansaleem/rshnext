import Image from 'next/image'

export default function Home() {
  return (
    <>
  <header>
    <div
      style={{
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        padding: "150px 20px",
        color: "white"
      }}
    >
      <div style={{ fontSize: 75, fontWeight: "bold" }}>
        Certified Web 3.0 and Metaverse Developer: A Nationwide Program in
        Karachi, Lahore, Islamabad, and Peshawar
      </div>
      <div style={{ fontSize: 25 }}>
        Getting Ready for the Next Generation and Future of the Internet - Join
        a 13 Trillion Dollar Industry with 5 Billion Users
      </div>
    </div>
    {/* <div style="text-align:center;display:flex;align-items:center;flex-direction:column;justify-content:center;padding:0px 0px;color:white"></div> */}
    {/* <h1><b>Certified Web 3.0 and Metaverse Developer:<br />
          A Nationwide Program in Karachi, Lahore,<br />
          Islamabad, and Peshawar</b></h1>
  <h2>Getting Ready for the Next Generation and Future of the Internet - Join a 13 Trillion Dollar Industry with 5
      Billion Users</h2> */}
  </header>
  <center>
    <h3>
      Certified Web 3.0 and Metaverse Developer: A Nationwide Program in
      Karachi, Lahore, Islamabad, and Peshawar
    </h3>
    <img
      src="./images/pnsverse.png"
      alt="Panaverse DAO Logo"
      width={450}
      height={250}
      title="PANAVERSE LOGO"
    />
    <br />
    <br />
    <iframe
      width={441}
      height={245}
      src="https://www.youtube.com/embed/zXiNtyJcwuM"
      title="78 Chapter 5 - Images"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    />
    <h3>
      The Future of the Web is Web 3.0, Metaverse, and Edge Computing. Panaverse
      DAO is a movement to spread these technolgies globally. It is community of
      Web 3 and Metaverse developers, designers, trainers, startup founders and
      service providers.
    </h3>
    <br />
    <a href="https://www.piaic.org/">
      Admissions Now Open in Karachi, Lahore, Islamabad, and Peshawar
    </a>
    <h3>The Program in a Nutshell: Earn While You Learn</h3>
    <p>
      In this brand-new type of curriculum, students will learn how to make
      money and boost exports in the classroom and will begin doing so within
      six months of the program’s beginning. It resembles a cross between a
      corporate venture and an educational project.
    </p>
    <h3>Program of Studies</h3>
    <p>
      This curriculum is intended for beginners who want to learn software
      development from the ground up. The first two quarters are shared by all
      specialities and are dedicated to studying Object-Oriented Programming and
      cutting-edge Full-Stack Web 2.0 development. It is going to be a year-long
      hybrid programme that includes both onsite and online classes and is
      divided into four quarters of 13 weeks each. The emphasis will be on
      hands-on learning by educating students to produce projects. To
      accommodate everyone, courses will be held primarily on weekends or after
      6:00 p.m. (Pakistan Time) on weekdays. It employs a hybrid teaching
      format, with core onsite classes complemented by online Zoom laboratories
      and recorded videos.
    </p>
    <h3>Web 3.0 (Blockchain) and Metaverse Specialization</h3>
    <p>
      This Web 3.0 and Metaverse specialization focuses on developing full-stack
      Web 3.0 and Metaverse experiences for the next generation of the internet
      by specializing in building worlds that merge the best of cutting-edge
      decentralized distributed blockchains with 3D metaverse client
      experiences.
    </p>
    <h3>Artificial Intelligence (AI) and Deep Learning Specialization</h3>
    <p>
      The AI and Deep Learning specialization focuses on building and deploying
      intelligent APIs using OpenAI models and building custom Deep Learning
      Tensorflow models.
    </p>
    <h3>Cloud-Native Computing Specialization</h3>
    <p>
      The Cloud-Native Computing Specialization focuses on Containers,
      Kubernetes, and CDK for Kubernetes.
    </p>
    <h3>Ambient Computing and IoT Specialization</h3>
    <p>
      The Ambient Computing and IoT Specialization focuses on building Smart
      Homes, Offices, Factories, and Cities using Voice computing, Matter and
      Embedded Devices.
    </p>
    <h3>Quaters 3 Results</h3>
    <table width="500">
      <tbody>
        <tr>
          <th colSpan={5}>Students PASS/FAIL</th>
        </tr>
        <tr>
          <th>programs</th>
          <th>Pass</th>
          <th>Fail</th>
          <th>%Passed</th>
          <th>%Failed</th>
        </tr>
        <tr>
          <th>Artificial Intelligence</th>
          <td>518</td>
          <td>148</td>
          <td>77.78%</td>
          <td>22.22%</td>
        </tr>
        <tr>
          <th>Cloud Native</th>
          <td>270</td>
          <td>85</td>
          <td>76.06%</td>
          <td>23.94%</td>
        </tr>
        <tr>
          <th>IOT</th>
          <td>78</td>
          <td>25</td>
          <td>75.73%</td>
          <td>24.27</td>
        </tr>
        <tr>
          <th>total</th>
          <td>866</td>
          <td>258</td>
          <td>77.05%</td>
          <td>22.95%</td>
        </tr>
      </tbody>
    </table>
    <br />
    <br />
    <iframe
      width={540}
      height={480}
      src="https://www.youtube.com/embed/PuXITX7Nt6k?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6"
      title="102 Chapter 6 - Tables in Practice"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    />
    <form>
        <fieldset>
          <legend>Personal details </legend>
          <p>
            First Name
            <input type="text" name="firstname"  />
            <br />
            
            Last Name
            <input type="text" name="lastname"   />
          </p>
          <p>
            Gender:
            <input id="male" type="radio" name="gender"  />
            Male
            <label >Male</label>
            <label>
              <input type="radio" name="gender"  />
              Female
            </label></p>
          <p>
            Nationality:
            <select name="countaries">
              <option value="Pakistan">Pakistan</option>
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="USE">UAE</option>
            </select>
          </p>
        </fieldset>
        <p>
          Password
          <input type="password" />
        </p>
        <p>
          Re-Password
          <input type="password" name="password"  />
        </p>
        </form>
   
  </center>
</>


    
  )
}
