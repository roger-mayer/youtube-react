console.clear();
//action creator (people dropping off form)
const createPolicy = (name, amount) => {
    return{ //action (form)
        type: 'CREATE_POLICY',
        payload:{
            name: name,
            amount: amount
        }
    };
};

const deletePolicy = (name) => {
    return{
        type: 'DELETE_POLICY',
        payload:{
            name: name
        }
    };
};

const createClaim = (name, amountOfMoneyToCollect) => {
    return{ //action (form)
        type: 'CREATE_CLAIM',
        payload:{
            name: name,
            amountOfMoneyToCollect: amountOfMoneyToCollect
        }
    };
};

//REDUCER (DEPARTMENTS)
const claimsHistory = (oldListOfClaims = [], action) => {
    if (action.type ==='CREATE_CLAIM'){
        return [...oldListOfClaims, action.payload];
    }
    return oldListOfClaims;
};

const accounting = (bagOfMoney = 100, action) => {
    if (action.type ==='CREATE_CLAIM'){
        return bagOfMoney - action.payload.amountOfMoneyToCollect;
    } else if (action.type === 'CREATE_POLICY'){
        return bagOfMoney + action.payload.amount;
    }
    return bagOfMoney
};

const policies = (listOfPolicies = [], action) =>{
    if (action.type === 'CREATE_POLICY'){
        return [...listOfPolicies, action.payload.name];
    } else if (action.type === 'DELETE_POLICY'){
        return listOfPolicies.filter(name => name !== action.payload.name);
    }
    return listOfPolicies;
};

//STORE
const { createStore, combineReducers } = Redux;

const ourDepartments = combineReducers({
    accounting: accounting,
    claimsHistory: claimsHistory,
    policies: policies
});

const store = createStore(ourDepartments);


store.dispatch(createPolicy('Roger', 20));
store.dispatch(createPolicy('Katie', 30));
store.dispatch(createPolicy('Asher', 40));
console.log(store.getState());



store.dispatch(createClaim('Roger', 120));
store.dispatch(deletePolicy('Asher', 40));
console.log(store.getState());
