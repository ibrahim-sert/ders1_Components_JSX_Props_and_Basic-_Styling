//* JSX'de stillendirme farklli sekillerde yapilabilr.
//* 1-) Harici CSS sayfalari ile (index.css, app.css v.b)
//* 2-) Inline stillendirme ile (style = {{color:"red"}})
//* 3- )Local veya global degiskenler ile.

//! NOTLAR:
//* Stillendirme icin property-value(object) yapisi kullanilir.
//* property isimlerinde camelCase kullanimalidir.
//* class isimleri icin className kullanilir.
//* Material UI, Styled Component, Sass, Bootstrap, Tailwind, Emotion, Ant Design v.b harici kutuphaneler kullanilabilir.

// ? Dahili bir resim eklemek icin import yapmak gereklidir.
// ? ancak public klasöründeki resimler import suz bir şekilde
//? erişilebilir.
import magnolia from "./img/magnolia.jpg"

//?Harici stillendirme dosyası
import './Content.css';

const Content =()=>{
  //?  Local Style Object
  const pStyle={
    fontFamily:"Tahoma",
    fontSize:"1.3rem",
    lineHeight:"1.5rem"
  }

  const imgStyle={
    margin:"1rem auto",
    display:"block",
    width:"400px"
  }
  return(
    <div>
      {/* JSX */}
      {/* Inline Styling */}
      <h2 style={{color:"white",backgroundColor:"red"}}>React JS</h2>

      {/* Local or global variables */}
      <p style={pStyle}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, ut.</p>


      <img style={imgStyle} src={magnolia} alt="spring-img1" />

      <p className="par">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quos, dolor pariatur nam quibusdam blanditiis.</p>

      <p className="par">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium rerum animi aperiam molestias saepe laudantium a, esse sed asperiores neque consequuntur provident, laborum aspernatur assumenda iusto voluptatum culpa ipsa velit?</p>
    </div>
  )
}

export default Content