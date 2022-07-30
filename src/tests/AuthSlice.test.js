import reducer, { loginUser } from '../store/Auth/AuthSlice'
describe("Auth reducer initial state", () => {
    test("should not be authenticated ", () => {
    
        expect(reducer(undefined, { type: undefined })).toEqual({ IsFetching: false, IsAuthenticated: false, error: null })
    }
    )
    
});

// describe('Auth actions', () => {
//     test('loginUser to change IsAuthenticated', () => {
//         const previousState = { IsFetching: false, IsAuthenticated: false, error: null };
//         expect(reducer(previousState,
//             { type: 'Auth/login'.action = (action) => {
//             return action.payload = { user: { userObject }, IsAuthenticated: true }
//         }}
//         )).toEqual({ IsFetching: false, IsAuthenticated: true, error: null })
//     })
// })