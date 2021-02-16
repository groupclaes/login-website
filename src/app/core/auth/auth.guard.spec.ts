import { HttpClientTestingModule } from '@angular/common/http/testing'
import { TestBed } from '@angular/core/testing'
import { AuthGuard } from './auth.guard'
import { AuthService } from './auth.service'

describe('AuthGuard', () => {
  let guard: AuthGuard

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        AuthService
      ]
    })
    guard = new AuthGuard(TestBed.inject(AuthService))
  })

  it('should be created', () => {
    expect(guard).toBeTruthy()
  })

  // it('should return false when not authenticated', async () => {
  //   let result = await guard.canActivate();
  //   expect(result).toEqual(false)
  // })
})
