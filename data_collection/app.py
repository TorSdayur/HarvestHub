import streamlit as st
import pandas as pd
import folium
from streamlit_folium import st_folium
from folium import IFrame
# Inject custom CSS
st.markdown("""
    <style>
        .reportview-container .main .block-container {
            padding: 2rem;
        }
        .sidebar .sidebar-content {
            background-color: #f5f5f5;
        }
        .css-18e3th9 {
            font-size: 18px;
        }
    </style>
""", unsafe_allow_html=True)

df = pd.read_csv('csv/food_rows.csv')

# Streamlit app
st.title('Food Pantry Map')

# Tabs for different views
tabs = st.tabs(["Map View", "Data Table"])

# Map View
with tabs[0]:
    st.write('Use the filters on the left to select the boroughs and days of the week to display food pantries on the map.')
    
    # Sidebar for filters
    st.sidebar.title('Filter Options')
    
    # Boroughs filter
    boroughs = st.sidebar.multiselect(
        'Select Boroughs',
        options=df['BOROUGH'].unique(),
        default=df['BOROUGH'].unique()
    )

    # Days filter using checkboxes inside an expander
    with st.sidebar.expander('Select Days'):
        days = []
        day_column_map = {
            'Monday': 'mon',
            'Tuesday': 'tue',
            'Wednesday': 'wed',
            'Thursday': 'thur',
            'Friday': 'fri',
            'Saturday': 'sat',
            'Sunday': 'sun'
        }
        for day, column in day_column_map.items():
            if st.checkbox(day, value=True):
                days.append(day)
    
    # Create a mask for the selected days
    day_mask = df[[day_column_map[day] for day in days]].any(axis=1)
    
    # Apply filters
    filtered_df = df[(df['BOROUGH'].isin(boroughs)) & day_mask]
    
    # Create a Folium map
    m = folium.Map(location=[filtered_df['LATITUDE'].mean(), filtered_df['LONGITUDE'].mean()], zoom_start=12)
    
    # Custom HTML template for the popup with wider dimensions
    html_template = '''
        <div style="width: 600px; padding: 20px; font-size: 14px; font-family: Arial, sans-serif; border: 1px solid #ddd; border-radius: 8px; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);">
            <h4 style="margin-top: 0; color: #333; font-size: 20px;">{name}</h4>
            <p style="margin: 0; color: #555;"><strong>Hours:</strong> {hours}</p>
            <p style="margin: 5px 0; color: #555;"><strong>Phone:</strong> {phone}</p>
            <p style="margin: 0; color: #555;"><strong>Address:</strong> {address}</p>
        </div>
    '''
    
    # Add markers to the map with custom HTML popup
    for _, row in filtered_df.iterrows():
        iframe = IFrame(html_template.format(
            name=row['PROGRAM'],
            hours=row['HOURS'],
            phone=row['ORG PHONE'],
            address=row['FULL ADDRESS']
        ), width=600, height=300)  # Increased width and height
        folium.Marker(
            location=[row['LATITUDE'], row['LONGITUDE']],
            popup=folium.Popup(iframe, max_width=650),
            icon=folium.Icon(color='blue', icon='info-sign')
        ).add_to(m)
    
    # Add a legend
    legend_html = '''
        <div style="position: fixed; bottom: 10px; left: 10px; width: 150px; height: auto; 
        background-color: white; border:2px solid grey; z-index:1000; font-size:14px;
        ">&nbsp; <b>Legend</b> <br>
        &nbsp; <i class="fa fa-circle" style="color:blue"></i>&nbsp; Food Pantry<br>
        </div>
    '''
    m.get_root().html.add_child(folium.Element(legend_html))
    
    # Render the map in Streamlit
    st_folium(m, width=800, height=600)

# Data Table View
with tabs[1]:
    st.write('Food Pantries')
    st.dataframe(filtered_df)
