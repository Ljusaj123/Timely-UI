import { TestBed } from '@angular/core/testing'

import { ProjectService } from './project-service.service'

describe('ProjectSrviceService', () => {
  let service: ProjectService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(ProjectService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
