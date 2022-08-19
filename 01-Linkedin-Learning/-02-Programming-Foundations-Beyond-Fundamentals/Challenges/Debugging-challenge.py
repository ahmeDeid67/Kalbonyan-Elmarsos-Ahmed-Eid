def plant_recommendation(care):
    # for equality we should use double equal
    if care == 'low':
        print('aloe')
    elif care == 'medium':
        print('pothos')
    # we already use medium the logic tell me use high instead of medium
    elif care == 'high':
        print('orchid')

# the plant_rec not a function we shold use plant_recommendation
plant_recommendation('low')
plant_recommendation('medium')
plant_recommendation('high')
