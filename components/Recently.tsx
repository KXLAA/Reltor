import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const Container = styled.main``;

const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 36px;

  h2 {
    font-style: normal;
    font-size: 38px;
    line-height: 50px;
    color: #110229;
  }

  a {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 31px;
    color: #1daeff;
  }
`;

const Cards = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const Card = styled.div`
  background: #ffffff;
  border: 1.5px solid #dcdceb;
  border-radius: 30px;
  padding: 32px;
  display: flex;
  gap: 32px;

  img {
    border-radius: 20px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  h3 {
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 37px;
    color: #110229;
  }
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    font-style: normal;
    font-weight: 500;
    font-size: 19px;
    line-height: 25px;
    color: #8f90a6;
  }
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;

  p {
    font-style: normal;
    font-weight: 500;
    font-size: 19px;
    line-height: 25px;
    color: #8f90a6;
  }
`;

const Price = styled.div`
  background: #8f90a6;
  border-radius: 10px;
  color: #ffffff;
  font-weight: 500;
  font-size: 19px;
  line-height: 25px;
  padding: 8px 16px;
`;

const Recently = () => {
  return (
    <Container>
      <Heading>
        <h2>Recently Added</h2>
        <a>See all</a>
      </Heading>
      <Cards>
        <Column>
          <Card>
            <Image
              width={158}
              height={191}
              src="/card-01.png"
              alt="cart-image"
            />

            <Content>
              <h3>
                103/143 West Street,
                <br />
                Crows Nest
              </h3>

              <Details>
                <p>10 Bedroom</p>
                <p>150 M</p>
                <p>2 Garage</p>
              </Details>

              <Info>
                <p>Posted by Builder</p>
                <Price>$45,545</Price>
              </Info>
            </Content>
          </Card>

          <Card>
            <Image
              width={158}
              height={191}
              src="/card-01.png"
              alt="cart-image"
            />

            <Content>
              <h3>
                103/143 West Street,
                <br />
                Crows Nest
              </h3>

              <Details>
                <p>10 Bedroom</p>
                <p>150 M</p>
                <p>2 Garage</p>
              </Details>

              <Info>
                <p>Posted by Builder</p>
                <Price>$45,545</Price>
              </Info>
            </Content>
          </Card>

          <Card>
            <Image
              width={158}
              height={191}
              src="/card-01.png"
              alt="cart-image"
            />

            <Content>
              <h3>
                103/143 West Street,
                <br />
                Crows Nest
              </h3>

              <Details>
                <p>10 Bedroom</p>
                <p>150 M</p>
                <p>2 Garage</p>
              </Details>

              <Info>
                <p>Posted by Builder</p>
                <Price>$45,545</Price>
              </Info>
            </Content>
          </Card>
        </Column>

        <Column>
          <Card>
            <Image
              width={158}
              height={191}
              src="/card-01.png"
              alt="cart-image"
            />

            <Content>
              <h3>
                103/143 West Street,
                <br />
                Crows Nest
              </h3>

              <Details>
                <p>10 Bedroom</p>
                <p>150 M</p>
                <p>2 Garage</p>
              </Details>

              <Info>
                <p>Posted by Builder</p>
                <Price>$45,545</Price>
              </Info>
            </Content>
          </Card>

          <Card>
            <Image
              width={158}
              height={191}
              src="/card-01.png"
              alt="cart-image"
            />

            <Content>
              <h3>
                103/143 West Street,
                <br />
                Crows Nest
              </h3>

              <Details>
                <p>10 Bedroom</p>
                <p>150 M</p>
                <p>2 Garage</p>
              </Details>

              <Info>
                <p>Posted by Builder</p>
                <Price>$45,545</Price>
              </Info>
            </Content>
          </Card>

          <Card>
            <Image
              width={158}
              height={191}
              src="/card-01.png"
              alt="cart-image"
            />

            <Content>
              <h3>
                103/143 West Street,
                <br />
                Crows Nest
              </h3>

              <Details>
                <p>10 Bedroom</p>
                <p>150 M</p>
                <p>2 Garage</p>
              </Details>

              <Info>
                <p>Posted by Builder</p>
                <Price>$45,545</Price>
              </Info>
            </Content>
          </Card>
        </Column>
      </Cards>
    </Container>
  );
};

export default Recently;
