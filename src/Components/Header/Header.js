import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Nav>
                <Container>
                        <Nav className="bg-secondary fw-bold fs-5 gap-4 ms-5">
                        <img className="bg-white pe-2 py-3" src={'data:image/webp;base64,UklGRmQDAABXRUJQVlA4TFgDAAAvn8AHEEfFqG0jQf4vjuOPcWeyOgpiwRTvTiOBQIrTGW21bdsw+f/ZzE6R1LZtw8BrCv0G6pTon3xfEAIAIBZCAOHM9VIIhdSBBwDg4IvCDeQhDHtp+BrXja0Gj18Igr3WMnYOFoGB2wJzseW9KQELUgpA2rZtZyM9T91Uazxj27Zt25712Frbtvd/9kUm2eZzRP8ZuG2kKD3GLBy8Afy5l1A5sf8LxPmxO1YWcw+MIveIiKh09STn8W+pmDExElq2BpOI4q6cAYDTl6KI0oZ3Wo2Cz9e35qn/Ipx/2B1Eue/hTTYF9T6+ABf6aHbj2mfD2BtVMXfv1Idyij2MpaqPJ+5OlUYYxs57VDDSkBdMRGFdj4aIaPRBZygRBec3jxUaACNTHVSydf/1r2erbWFEzcmU3EgU3rH+/OeLe5vF1D4yAoEd4pPTs/tlOYVRSFn5tN2dITAKdBIPtpYWR+tSiSh0YDqUiEJn+kKIKL1+/PLK3s0kXXCi2fP/kMUJ/L49FEF8Iofv/uF8srTFjqgAeBDRAjrFjOhVBbchnxZWV1evUuZfAFCN12lCRJtTb7woioZAHb0HgO9UBMfAjlzM7mPArAQqVhRFOQZMAhMHIlr9TaL4T/LojaAC9EdSGjunYEK0cjXhtiLaPAIURESnCicAjx0RbW6VeB1+WR8Df6ob0aoxDkSTj3NQkJG3I3J9zSNF7gROROSUVOBmlcwmnbEgOngHHyIqwucUrVLkTi6BhVsFXpNASk8YX0Us4WTL7mLbxCfYrDBInBhPB9eYkkOY54k19Fr1xqQSJ6fklSNxciFaeV8VWDhDOP7m6Li4uBjNV5iqMqtA6uREUbxyENGjEUy0PkQvZJsFFioO+Q8upA2SFQAADhUPlBt5XKy+VY/vgs0r+C5oi8/E1aliESDpEG4At4nVsSFafOD1P8n6f1e1Q3wh7ruqWkOi6NX/v0RLBLstchhTJnapogKq0e6/TksYZf+SovK/xGNDNCkCRZfNX0tu0IxADoXX1dW09k2vPTsn4ezTlcnepqrquvCAR5CowTcCXvZFCIQCnVuPX336+PbBwUJtCFE4RyhRaN3i0cP3X7++e3IHjCInbsQRpWVlZaUTxS+dAiPKtyRik/ANDCMA'} alt="" />
                        <Link className="pt-3 text-decoration-none text-white" to="/home">Home</Link>
                        <Link className="pt-3 text-decoration-none text-white" to="/courses">Courses</Link>
                        <Link className="pt-3 text-decoration-none text-white" to="/instractor">Instractor</Link>
                        <Link className="pt-3 text-decoration-none text-white" to="/aboutus">About Us</Link>
                        </Nav>
                </Container>
            </Nav>
        </div>
    );
};

export default Header;