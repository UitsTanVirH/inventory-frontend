import {
  Badge,
  Card,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Table,
  Container,
  Row,
  CardTitle,
  Col, CardBody
} from "reactstrap";
import Register from "./Register";
// core components

const Tables = () => {
  return (
    <>
      {/* <Header /> */}
      {/* <AdminNavbar/> */}

      <Container>
        <Row>
            <Register/>
        </Row>
        <br/>
      
      </Container>
    </>
  );
};

export default Tables;
