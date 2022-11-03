import styled from 'styled-components'

const SideBar = styled.div`
  width: 280px;

  @media all and (max-width: 820px) {
    flex-direction: row !important;
    width: 100%;
    gap: 20px;

    .nav {
      flex-direction: row !important;
    }

    > a {
      padding: 0 0 0 10px !important;
      margin: 0 !important;
    }
  }
  
  .text-bold {
    font-weight: 700;
  }

  .nav-link:not(.active) {
    &:hover {
      color: var(--bs-nav-pills-link-active-color);
      background-color: var(--bs-secondary);
    }
  }
`

export default SideBar
