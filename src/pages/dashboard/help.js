import { Outlet } from "react-router-dom";

function Help() {
    return (
      <div className="Help">
        <h1>Help</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident placeat consequatur pariatur commodi labore voluptatem dolor mollitia, eum esse! Adipisci dicta dolores impedit dolorem, eveniet molestias corporis cumque atque porro.
        </p>
        <Outlet />
      </div>
    );
  }
  
  export default Help;
  