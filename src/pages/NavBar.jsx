const NavBar = ()=>{
  return(
    <>
    <nav className="navbar mt-3" style={{position: 'absolute',backgroundColor:'transparent'}}>
      <div className="nav-brand ml-4">
        <h2 className="title is-2">重要時間表</h2>
      </div>
      {/* <div className="flex">
        <div className="has-text-centered has-text-vcentered mt-3">
          <span className="mx-3">Timeline</span>
          <span className="mx-3">Tutorial</span>
        </div>
      </div> */}
    </nav>
    </>
  )
}

export default NavBar