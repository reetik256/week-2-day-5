import {Component} from 'react';


class About extends Component{
  
    render(){
        return (
            <div data-testid="about-content">
                <div className="container col-xxl-8 px-4 py-5">
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div className="col-10 col-sm-8 col-lg-6">
        <img src="data:image/jpeg;base64,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" alt="Bootstrap Themes" width="500" height="500" loading="lazy"/>
      </div>
      <div className="col-lg-6">
        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Reetik Automobiles</h1>
        <p className="lead">Reetik Automobiles stands as a paragon of automotive excellence, nestled in the heart of our bustling city. With a rich heritage spanning over three decades, our commitment to delivering unparalleled service and quality vehicles remains unwavering. Specializing in a diverse array of automobiles ranging from luxury sedans to rugged SUVs, Shoaib Automobiles prides itself on not only meeting but exceeding the expectations of our esteemed clientele. </p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Vehicles</button>
          <button type="button" className="btn btn-outline-secondary btn-lg px-4">Contact US</button>
        </div>
        </div>
    </div>
  </div>
  <div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card h-100">
      <img src="https://www.mercedes-benz.com/content/dam/brandhub/assets/innovation/concept-cars/vision-avtr/02-mercedes-benz-vehicles-concept-cars-vision-avtr-3400x1440.cbv20230517105343.jpg/_jcr_content/renditions/mq7-original-aspect.jpeg" className="card-img-top" height={300} alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Mercedez1</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      <div className="card-footer">
        <small className="text-body-secondary">Book Now</small>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="https://stimg.cardekho.com/images/carexteriorimages/630x420/Mercedes-Benz/GLA-2024/9731/1679039244149/front-left-side-47.jpg?impolicy=resize&imwidth=480" className="card-img-top" height={300} alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Mercedez2</h5>
        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      </div>
      <div className="card-footer">
        <small className="text-body-secondary">Book Now</small>
      </div>
      </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="https://media.formula1.com/image/upload/content/dam/fom-website/manual/Misc/2022manual/WinterFebruary/Mercedes/01_W13_Front_GR_AKK.jpg" className="card-img-top" height={300} alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Mercedez3</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      </div>
      <div className="card-footer">
        <small className="text-body-secondary">Book Now</small>
      </div>
    </div>
  </div>
</div>
            </div>
        )
    }
}
export default About;