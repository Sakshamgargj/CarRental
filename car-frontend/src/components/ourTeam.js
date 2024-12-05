import React from 'react'
import img1 from '../images/logo.png'
import photo from '../images/image.jpg'
import Header from './header'
import Footer from './footer'

const OurTeam = () => {
  return (
    <div>
        <Header/>
        <h1 align='center'>OWNER</h1>
        <div className='row p-5'>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-4 col-xs-6 p-3">
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-xs-12 p-3">
                <div className="card">
                    <div className="card-header text-center" style={{backgroundColor:"#ef753c"}}>Owner Name</div>
                        <div className="card-body text-center">
                            <img src={photo} style={{width: '100px',height: '150px',borderRadius:'40px'}} />
                            <h6 className='mt-4'>Contact No. : +91 XXXXX XXXXX</h6>
                            <h6>Designation : Owner</h6>
                        </div>
                    <div className="card-footer text-center" style={{backgroundColor:"#ef753c"}}>Note : Contact for any query</div>
                </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-xs-12 p-3">
                <div className="card">
                    <div className="card-header text-center" style={{backgroundColor:"#ef753c"}}>Owner Name</div>
                        <div className="card-body text-center">
                            <img src={photo} style={{width: '100px',height: '150px',borderRadius:'40px'}} />
                            <h6 className='mt-4'>Contact No. : +91 XXXXX XXXXX</h6>
                            <h6>Designation : Owner</h6>
                        </div>
                    <div className="card-footer text-center" style={{backgroundColor:"#ef753c"}}>Note : Contact for any query</div>
                </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-4 col-xs-6 p-3">
            </div>
        </div>
        <h1 align='center'> Team Members</h1>
        <div className='row p-5'>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-4 col-xs-6 p-3">
                <div className="card">
                    <div className="card-header text-center" style={{backgroundColor:"#ef753c"}}>Name of TeamMember</div>
                        <div className="card-body text-center">
                            <img src={photo} style={{width: '100px',height: '150px',borderRadius:'40px'}} />
                            <h6 className='mt-4'>Contact No. +91 XXXXX XXXXX</h6>
                            <h6>Designation</h6>
                        </div>
                    <div className="card-footer text-center" style={{backgroundColor:"#ef753c"}}>Note : Contact for any query</div>
                </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-4 col-xs-6 p-3">
                <div className="card">
                    <div className="card-header text-center" style={{backgroundColor:"#ef753c"}}>Name of TeamMember</div>
                        <div className="card-body text-center">
                            <img src={photo} style={{width: '100px',height: '150px',borderRadius:'40px'}} />
                            <h6 className='mt-4'>Contact No. +91 XXXXX XXXXX</h6>
                            <h6>Designation</h6>
                        </div>
                    <div className="card-footer text-center" style={{backgroundColor:"#ef753c"}}>Note : Contact for any query</div>
                </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-4 col-xs-6 p-3">
                <div className="card">
                    <div className="card-header text-center" style={{backgroundColor:"#ef753c"}}>Name of TeamMember</div>
                        <div className="card-body text-center">
                            <img src={photo} style={{width: '100px',height: '150px',borderRadius:'40px'}} />
                            <h6 className='mt-4'>Contact No. +91 XXXXX XXXXX</h6>
                            <h6>Designation</h6>
                        </div>
                    <div className="card-footer text-center" style={{backgroundColor:"#ef753c"}}>Note : Contact for any query</div>
                </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-4 col-xs-6 p-3">
                <div className="card">
                    <div className="card-header text-center" style={{backgroundColor:"#ef753c"}}>Name of TeamMember</div>
                        <div className="card-body text-center">
                            <img src={photo} style={{width: '100px',height: '150px',borderRadius:'40px'}} />
                            <h6 className='mt-4'>Contact No. +91 XXXXX XXXXX</h6>
                            <h6>Designation</h6>
                        </div>
                    <div className="card-footer text-center" style={{backgroundColor:"#ef753c"}}>Note : Contact for any query</div>
                </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-4 col-xs-6 p-3">
                <div className="card">
                    <div className="card-header text-center" style={{backgroundColor:"#ef753c"}}>Name of TeamMember</div>
                        <div className="card-body text-center">
                            <img src={photo} style={{width: '100px',height: '150px',borderRadius:'40px'}} />
                            <h6 className='mt-4'>Contact No. +91 XXXXX XXXXX</h6>
                            <h6>Designation</h6>
                        </div>
                    <div className="card-footer text-center" style={{backgroundColor:"#ef753c"}}>Note : Contact for any query</div>
                </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-4 col-xs-6 p-3">
                <div className="card">
                    <div className="card-header text-center" style={{backgroundColor:"#ef753c"}}>Name of TeamMember</div>
                        <div className="card-body text-center">
                            <img src={photo} style={{width: '100px',height: '150px',borderRadius:'40px'}} />
                            <h6 className='mt-4'>Contact No. +91 XXXXX XXXXX</h6>
                            <h6>Designation</h6>
                        </div>
                    <div className="card-footer text-center" style={{backgroundColor:"#ef753c"}}>Note : Contact for any query</div>
                </div>
            </div>
            
        </div>
        <Footer/>
    </div>
  )
}

export default OurTeam
