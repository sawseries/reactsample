import { useParams, useNavigate } from "react-router-dom";

export function withNavigate(Component) {
  return (props) => (
   <Component {...props} params={useParams()} navigate={useNavigate()} />
);
}


