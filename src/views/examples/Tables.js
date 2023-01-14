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
// core components

const Tables = () => {
  return (
    <>
      {/* <Header /> */}
      {/* <AdminNavbar/> */}

      <Container>

        <Row>
          <Col lg="6" xl="3">
            <Card className="card-stats mb-4 mb-xl-0">
              <CardBody>
                <Row>
                  <div className="col">
                    <CardTitle
                      tag="h5"
                      className="text-uppercase text-muted mb-0"
                    >
                      Jan 03, 2023
                    </CardTitle>
                    {/* <span className="h2 font-weight-bold mb-0">420</span> */}
                  </div>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col lg="6" xl="3">
            <Card className="card-stats mb-4 mb-xl-0">
              <CardBody>
                <Row>
                  <div className="col">
                    <CardTitle
                      tag="h5"
                      className="text-uppercase text-muted mb-0"
                    >
                      Department
                    </CardTitle>
                    {/* <span className="h2 font-weight-bold mb-0">420</span> */}
                  </div>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col lg="6" xl="3">
            <Card className="card-stats mb-4 mb-xl-0">
              <CardBody>
                <Row>
                  <div className="col">
                    <CardTitle
                      tag="h5"
                      className="text-uppercase text-muted mb-0"
                    >
                      Attendance
                    </CardTitle>
                    {/* <span className="h2 font-weight-bold mb-0">15</span> */}
                  </div>
                  
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col lg="6" xl="3">
            <Card className="card-stats mb-4 mb-xl-0">
              <CardBody>
                <Row>
                  <div className="col">
                    <CardTitle
                      tag="h5"
                      className="text-uppercase text-muted mb-0"
                    >
                      Present
                    </CardTitle>
                    {/* <span className="h2 font-weight-bold mb-0">5</span> */}
                  </div>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <br />

        <Row>
          <Col lg="6" xl="3">
            <Card className="card-stats mb-4 mb-xl-0">
              <CardBody>
                <Row>
                  <div className="col">
                    <CardTitle
                      tag="h5"
                      className="text-uppercase text-muted mb-0"
                    >
                      Check In
                    </CardTitle>
                    {/* <span className="h2 font-weight-bold mb-0">420</span> */}
                  </div>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col lg="6" xl="3">
            <Card className="card-stats mb-4 mb-xl-0">
              <CardBody>
                <Row>
                  <div className="col">
                    <CardTitle
                      tag="h5"
                      className="text-uppercase text-muted mb-0"
                    >
                      Location
                    </CardTitle>
                    {/* <span className="h2 font-weight-bold mb-0">420</span> */}
                  </div>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col lg="6" xl="3">
            <Card className="card-stats mb-4 mb-xl-0">
              <CardBody>
                <Row>
                  <div className="col">
                    <CardTitle
                      tag="h5"
                      className="text-uppercase text-muted mb-0"
                    >
                      Designation
                    </CardTitle>
                    {/* <span className="h2 font-weight-bold mb-0">15</span> */}
                  </div>
                  
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col lg="6" xl="3">
            <Card className="card-stats mb-4 mb-xl-0">
              <CardBody>
                <Row>
                  <div className="col">
                    <CardTitle
                      tag="h5"
                      className="text-uppercase text-muted mb-0"
                    >
                      Department
                    </CardTitle>
                    {/* <span className="h2 font-weight-bold mb-0">5</span> */}
                  </div>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <br />
        <Row>
          <div className="col">
            <Card className="shadow">
              {/* <CardHeader className="border-0">
                <h3 className="mb-0">Card tables</h3>
              </CardHeader> */}
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Employee Name</th>
                    <th scope="col">Department</th>
                    <th scope="col">Check in</th>
                    <th scope="col">Check out</th>
                    <th scope="col">Remark</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
                      <Media className="align-items-center">
                        
                        <Media>
                          <span className="mb-0 text-sm">
                            Zahid Hasan
                          </span>
                        </Media>
                      </Media>
                    </th>
                    <td>Hr & Admin</td>
                    <td>
                      <Badge color="" className="badge-dot mr-4">
                        <i className="bg-warning" />
                        9:45 am
                      </Badge>
                    </td>

                    <td>
                    <Badge color="" className="badge-dot mr-4">
                        <i className="bg-warning" />
                        9:45 am
                      </Badge>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">PDF</span>
                     
                      </div>
                    </td>
                    <td className="text-right">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="btn-icon-only text-light"
                          href="#pablo"
                          role="button"
                          size="sm"
                          color=""
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Action
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Another action
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Something else here
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <Media className="align-items-center">
                        
                        <Media>
                          <span className="mb-0 text-sm">
                            Zahid Hasan
                          </span>
                        </Media>
                      </Media>
                    </th>
                    <td>Hr & Admin</td>
                    <td>
                      <Badge color="" className="badge-dot mr-4">
                        <i className="bg-warning" />
                        9:45 am
                      </Badge>
                    </td>

                    <td>
                    <Badge color="" className="badge-dot mr-4">
                        <i className="bg-warning" />
                        9:45 am
                      </Badge>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">PDF</span>
                     
                      </div>
                    </td>
                    <td className="text-right">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="btn-icon-only text-light"
                          href="#pablo"
                          role="button"
                          size="sm"
                          color=""
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Action
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Another action
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Something else here
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <Media className="align-items-center">
                        
                        <Media>
                          <span className="mb-0 text-sm">
                            Zahid Hasan
                          </span>
                        </Media>
                      </Media>
                    </th>
                    <td>Hr & Admin</td>
                    <td>
                      <Badge color="" className="badge-dot mr-4">
                        <i className="bg-warning" />
                        9:45 am
                      </Badge>
                    </td>

                    <td>
                    <Badge color="" className="badge-dot mr-4">
                        <i className="bg-warning" />
                        9:45 am
                      </Badge>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">PDF</span>
                     
                      </div>
                    </td>
                    <td className="text-right">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="btn-icon-only text-light"
                          href="#pablo"
                          role="button"
                          size="sm"
                          color=""
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Action
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Another action
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Something else here
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <Media className="align-items-center">
                        
                        <Media>
                          <span className="mb-0 text-sm">
                            Zahid Hasan
                          </span>
                        </Media>
                      </Media>
                    </th>
                    <td>Hr & Admin</td>
                    <td>
                      <Badge color="" className="badge-dot mr-4">
                        <i className="bg-warning" />
                        9:45 am
                      </Badge>
                    </td>

                    <td>
                    <Badge color="" className="badge-dot mr-4">
                        <i className="bg-warning" />
                        9:45 am
                      </Badge>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">PDF</span>
                     
                      </div>
                    </td>
                    <td className="text-right">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="btn-icon-only text-light"
                          href="#pablo"
                          role="button"
                          size="sm"
                          color=""
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Action
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Another action
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Something else here
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <Media className="align-items-center">
                        
                        <Media>
                          <span className="mb-0 text-sm">
                            Zahid Hasan
                          </span>
                        </Media>
                      </Media>
                    </th>
                    <td>Hr & Admin</td>
                    <td>
                      <Badge color="" className="badge-dot mr-4">
                        <i className="bg-warning" />
                        9:45 am
                      </Badge>
                    </td>

                    <td>
                    <Badge color="" className="badge-dot mr-4">
                        <i className="bg-warning" />
                        9:45 am
                      </Badge>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">PDF</span>
                     
                      </div>
                    </td>
                    <td className="text-right">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="btn-icon-only text-light"
                          href="#pablo"
                          role="button"
                          size="sm"
                          color=""
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Action
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Another action
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Something else here
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                </tbody>
              </Table>
              <CardFooter className="py-4">
                <nav aria-label="...">
                  <Pagination
                    className="pagination justify-content-end mb-0"
                    listClassName="justify-content-end mb-0"
                  >
                    <PaginationItem className="disabled">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        tabIndex="-1"
                      >
                        <i className="fas fa-angle-left" />
                        <span className="sr-only">Previous</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem className="active">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        2 <span className="sr-only">(current)</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        3
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fas fa-angle-right" />
                        <span className="sr-only">Next</span>
                      </PaginationLink>
                    </PaginationItem>
                  </Pagination>
                </nav>
              </CardFooter>
            </Card>
          </div>
        </Row>
      
      </Container>
    </>
  );
};

export default Tables;
