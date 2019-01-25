export const mockData = {
    userInfo: {
        name: 'chris',
        securityGroups: [] as any,
        trainings: [
            {
                id: 1,
                name: 'Example Training 1',
                status: 'complete',
                time: new Date(),
                duration: '5 hours',
                location: 'here'
            },
            {
                id: 2,
                name: 'Example Training 2',
                status: 'incomplete',
                time: new Date(),
                duration: '5 hours',
                location: 'here'
            }
        ] as any,
        jobPosition: 'job',
        department: 'dept',
        address: 'address',
        DOB: new Date(),
        SSN: 123456789,
        bankInfo: 'bankInfo',
        highestEductation: 'highestEd',
        prevEmployment: 'prevEmpl'
    }
}