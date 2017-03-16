import { XyzUserListService } from './user-list.service';

describe('XyzUserListService', () => {
    let service: XyzUserListService;

    beforeEach(() => {
        service = new XyzUserListService();
    })

    it('should return a User List with 16 users', (done) => {
        service.get().then(response => {
            expect(response.length).toBe(16);
            done();
        })
    })
})
