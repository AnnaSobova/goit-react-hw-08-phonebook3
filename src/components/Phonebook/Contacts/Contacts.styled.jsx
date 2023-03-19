import styled from '@emotion/styled';

const ContactsItem = styled.div`
  & p {
    margin-bottom: 10px;
    margin-top:0;
    text-align: center;
  }
  & ul {
    margin-top: 0;
    padding-left: 0;
    list-style: none;
  }

  & > ul {
    margin-top: 10px;
  }
  & li {
    display:flex;
    justify-content:space-between;
    &:not(:last-child){
      margin-bottom:10px;
    }
  }
`;
export const EmptyPhonebookText = styled.p`
  margin: 0;
  padding: 0;
  font-size: 24px;
`;

export const ContactName = styled.p`
  font-size: 18px;
  font-weight: 600;
`;

export const ContactNumber = styled.p`
  font-size: 18px;
  font-weight: 400;
`;

export const ContactsListItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ContactsButtons = styled.ul`
  margin-top: 0;
  list-style: none;
  display: flex;
  align-items: baseline;
  & li {
    &:not(:last-child) {
      margin-right: 5px;
    }
  }
`;

export const PhoneLink = styled.a`
  text-decoration: none;
  color: black;
  transition: transform 250ms linear, color 250ms linear;
  & svg {
    width: 28px;
    height: 28px;
  }
  &:hover {
    color: orangered;
    transform: translateY(-5px);
  }
`;
export default ContactsItem;