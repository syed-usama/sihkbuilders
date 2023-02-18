export const addUser =(user) => ({
    type: "ADD_USER",
    payload: user
    });
export const addStats =(stats) => ({
    type: "ADD_STATS",
    payload: stats
});
export const addProjects =(projects) => ({
    type: "ADD_PRO",
    payload: projects
});
export const addItems =(items) => ({
    type: "ADD_ITEMS",
    payload: items
});
export const addExpenseTypes =(etype) => ({
    type: "ADD_EXTYPES",
    payload: etype
});
export const addSuppliers =(sup) => ({
    type: "ADD_SUP",
    payload: sup
});
export const addEmployees =(emp) => ({
    type: "ADD_EMP",
    payload: emp
});