import React, { createContext, useContext, useMemo, useReducer } from 'react';

interface State {
  selectedUserId: any | null;
  isEditDrawerOpen: boolean;
  isDeleteModalOpen: boolean;
  sidenavColor: "white"|"blue-gray"|"gray"|"brown"|"deep-orange"|"orange"|"amber"|"yellow"|"lime"|"light-green"|"green"|"teal"|"cyan"|"light-blue"|"blue"|"indigo"|"deep-purple"|"purple"|"pink"|"red";
  sidenavType: string;
  transparentNavbar: boolean;
  openConfigurator: boolean;
}

interface Action {
  type: string;
  payload?: any;
  value?: any;
}

const initialState: State = {
  selectedUserId: null,
  isEditDrawerOpen: false,
  isDeleteModalOpen: false,
  sidenavColor: "gray",
  sidenavType: "white",
  transparentNavbar: true,
  openConfigurator: false,

};

const SET_EDIT_DRAWER = 'SET_EDIT_DRAWER';
const SET_SELECTED_USER_DATA = 'SET_SELECTED_USER_DATA';
const SET_DELETE_MODAL = 'SET_DELETE_MODAL';
const OPEN_CONFIGURATOR = 'OPEN_CONFIGURATOR';

// Reducer function
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SIDENAV_TYPE": {
      return { ...state, sidenavType: action.value };
    }
    case "SIDENAV_COLOR": {
      return { ...state, sidenavColor: action.value };
    }
    case "TRANSPARENT_NAVBAR": {
      return { ...state, transparentNavbar: action.value };
    }
    case "OPEN_CONFIGURATOR": {
      return { ...state, openConfigurator: action.value };
    }
    case SET_EDIT_DRAWER:
      return { ...state, isEditDrawerOpen: action.payload };
    case SET_SELECTED_USER_DATA:
      return { ...state, selectedUserId: action.payload };
    case SET_DELETE_MODAL:
      return { ...state, isDeleteModalOpen: action.payload };
    
    default:
      return state;
  }
}
const UserContext = createContext<
  { state: State; dispatch: React.Dispatch<Action> } | undefined
>(undefined);
type UserProviderProps = {
  children: React.ReactNode;
};

export function UserProvider({
  children,
}: UserProviderProps): React.ReactElement {
  const [controller, dispatch] = useReducer(reducer, initialState);
  const contextValue = useMemo(() => ({ state: controller, dispatch }), [controller, dispatch]);
  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
}
export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
};

export const setOpenConfigurator = (
  dispatch: React.Dispatch<Action>,
  value: boolean,
) => dispatch({ type: OPEN_CONFIGURATOR, value });

export const setEditDrawer = (
  dispatch: React.Dispatch<Action>,
  value: boolean,
) => dispatch({ type: SET_EDIT_DRAWER, payload: value });

export const setSelectedUserId = (
  dispatch: React.Dispatch<Action>,
  value: any,
) => dispatch({ type: SET_SELECTED_USER_DATA, payload: value });

export const setDeleteModal = (
  dispatch: React.Dispatch<Action>,
  value: boolean,
) => dispatch({ type: SET_DELETE_MODAL, payload: value });

export const setSidenavType = (
  dispatch: React.Dispatch<Action>,
  value: string,
) => dispatch({ type: "SIDENAV_TYPE", value });

export const setSidenavColor = (
  dispatch: React.Dispatch<Action>,
  value: string,
) => dispatch({ type: "SIDENAV_COLOR", value });

export const setTransparentNavbar = (
  dispatch: React.Dispatch<Action>,
  value: boolean,
) => dispatch({ type: "TRANSPARENT_NAVBAR", value });