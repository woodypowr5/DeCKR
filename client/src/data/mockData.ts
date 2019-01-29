export const mockData = {
    userInfo: {
        name: 'chris',
        securityGroups: [] as any,
        contracts: [
            {
                id: 1,
                name: "Contract 1",
                signature: null as any
            },
            {
                id: 2,
                name: "Contract 2",
                signature: {
                    employeeID: 101,
                    date: "hello"
                }
            },
            {
                id: 3,
                name: "Contract 3",
                signature: null as any
            },
            {
                id: 4,
                name: "Contract 4",
                signature: {   
                    employeeID: 101,
                    date: "hello"
                }
            }
        ],
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
            },
            {
                id: 3,
                name: 'Example Training 3',
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