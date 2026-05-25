// 全国市集活动数据（从外部JSON文件加载）
let markets = [];

// 初始化时从JSON文件加载数据
async function loadMarketData() {
    try {
        const response = await fetch('markets_data.json');
        if (!response.ok) {
            throw new Error('数据加载失败');
        }
        markets = await response.json();
        console.log(`已加载 ${markets.length} 个市集数据`);
        
        // 初始化页面
        initStats();
        initFilters();
        renderMarkets(markets);
        setupEventListeners();
        
    } catch (error) {
        console.error('加载市集数据失败:', error);
        // 使用备用数据
        loadFallbackData();
    }
}

// 备用数据（如果JSON文件加载失败）
function loadFallbackData() {
    markets = [
        {
            name: "伍德吃托克市集",
            province: "北京",
            city: "北京市",
            district: "朝阳区",
            address: "三里屯/国贸等商圈",
            start_date: "2026-05-25",
            end_date: "2026-05-26",
            time: "10:00-20:00",
            category: "美食市集",
            description: "北京知名美食市集品牌，汇聚各类网红美食、精酿啤酒、创意小吃",
            image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600",
            website: "https://woodstockofeating.com",
            frequency: "周末不定期"
        },
        {
            name: "农夫市集@北京",
            province: "北京",
            city: "北京市",
            district: "多个地点",
            address: "三元桥/亮马桥/望京等",
            start_date: "2026-06-01",
            end_date: "2026-06-02",
            time: "10:00-20:00",
            category: "农夫市集",
            description: "北京有机农夫市集，连接消费者和本地有机农户，提供新鲜有机农产品",
            image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=600",
            website: "https://bjcsf.org",
            frequency: "每周末"
        }
    ];
    
    initStats();
    initFilters();
    renderMarkets(markets);
    setupEventListeners();
}

// 状态管理
let filters = {
    keyword: "",
    province: "",
    city: "",
    category: "",
    dateRange: ""
};

// DOM 元素
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const provinceSelect = document.getElementById('province-select');
const citySelect = document.getElementById('city-select');
const categorySelect = document.getElementById('category-select');
const dateSelect = document.getElementById('date-select');
const resetBtn = document.getElementById('reset-btn');
const marketGrid = document.getElementById('market-grid');
const noResults = document.getElementById('no-results');
const viewAllBtn = document.getElementById('view-all-btn');
const resultCount = document.getElementById('result-count');
const activeFilters = document.getElementById('active-filters');
const totalMarkets = document.getElementById('total-markets');
const totalCities = document.getElementById('total-cities');

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    loadMarketData();
});

// 初始化统计
function initStats() {
    totalMarkets.textContent = markets.length;
    const cities = [...new Set(markets.map(m => m.city))];
    totalCities.textContent = cities.length;
}

// 初始化筛选器
function initFilters() {
    const provinces = [...new Set(markets.map(m => m.province))].sort();
    provinces.forEach(p => {
        const opt = document.createElement('option');
        opt.value = p;
        opt.textContent = p;
        provinceSelect.appendChild(opt);
    });
}

// 更新城市选项
function updateCityOptions() {
    citySelect.innerHTML = '<option value="">全部城市</option>';
    
    if (!filters.province) {
        citySelect.disabled = true;
        return;
    }
    
    citySelect.disabled = false;
    const cities = [...new Set(markets
        .filter(m => m.province === filters.province)
        .map(m => m.city))].sort();
    
    cities.forEach(c => {
        const opt = document.createElement('option');
        opt.value = c;
        opt.textContent = c;
        citySelect.appendChild(opt);
    });
}

// 设置事件监听器
function setupEventListeners() {
    // 搜索
    searchBtn.addEventListener('click', applyFilters);
    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') applyFilters();
    });
    
    // 筛选器
    provinceSelect.addEventListener('change', (e) => {
        filters.province = e.target.value;
        filters.city = "";
        updateCityOptions();
        applyFilters();
    });
    
    citySelect.addEventListener('change', (e) => {
        filters.city = e.target.value;
        applyFilters();
    });
    
    categorySelect.addEventListener('change', (e) => {
        filters.category = e.target.value;
        applyFilters();
    });
    
    dateSelect.addEventListener('change', (e) => {
        filters.dateRange = e.target.value;
        applyFilters();
    });
    
    // 重置
    resetBtn.addEventListener('click', resetFilters);
    viewAllBtn.addEventListener('click', resetFilters);
    
    // 底部链接
    document.getElementById('footer-home').addEventListener('click', (e) => {
        e.preventDefault();
        resetFilters();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    document.querySelectorAll('[data-category]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const category = e.target.dataset.category;
            categorySelect.value = category;
            filters.category = category;
            applyFilters();
            document.querySelector('.filters').scrollIntoView({ behavior: 'smooth' });
        });
    });
}

// 重置筛选
function resetFilters() {
    filters = {
        keyword: "",
        province: "",
        city: "",
        category: "",
        dateRange: ""
    };
    
    searchInput.value = "";
    provinceSelect.value = "";
    citySelect.value = "";
    citySelect.disabled = true;
    categorySelect.value = "";
    dateSelect.value = "";
    
    renderMarkets(markets);
    updateActiveFilters();
}

// 应用筛选
function applyFilters() {
    filters.keyword = searchInput.value.toLowerCase().trim();
    
    const filtered = markets.filter(m => {
        // 关键词搜索
        const matchKeyword = !filters.keyword || 
            m.name.toLowerCase().includes(filters.keyword) ||
            m.address.toLowerCase().includes(filters.keyword) ||
            m.description.toLowerCase().includes(filters.keyword) ||
            m.city.toLowerCase().includes(filters.keyword) ||
            m.district.toLowerCase().includes(filters.keyword);
        
        // 地区筛选
        const matchProvince = !filters.province || m.province === filters.province;
        const matchCity = !filters.city || m.city === filters.city;
        
        // 类型筛选
        const matchCategory = !filters.category || m.category === filters.category;
        
        // 日期筛选
        let matchDate = true;
        if (filters.dateRange) {
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            const marketStart = new Date(m.start_date);
            const marketEnd = new Date(m.end_date);
            
            switch (filters.dateRange) {
                case 'today':
                    matchDate = marketStart <= today && marketEnd >= today;
                    break;
                case 'weekend':
                    const thisSaturday = new Date(today);
                    thisSaturday.setDate(today.getDate() + (6 - today.getDay()));
                    const thisSunday = new Date(thisSaturday);
                    thisSunday.setDate(thisSaturday.getDate() + 1);
                    matchDate = marketStart <= thisSunday && marketEnd >= thisSaturday;
                    break;
                case 'month':
                    const monthStart = new Date(today.getFullYear(), today.getMonth(), 1);
                    const monthEnd = new Date(today.getFullYear(), today.getMonth() + 1, 0);
                    matchDate = marketStart <= monthEnd && marketEnd >= monthStart;
                    break;
                case 'next-month':
                    const nextMonthStart = new Date(today.getFullYear(), today.getMonth() + 1, 1);
                    const nextMonthEnd = new Date(today.getFullYear(), today.getMonth() + 2, 0);
                    matchDate = marketStart <= nextMonthEnd && marketEnd >= nextMonthStart;
                    break;
            }
        }
        
        return matchKeyword && matchProvince && matchCity && matchCategory && matchDate;
    });
    
    renderMarkets(filtered);
    updateActiveFilters();
}

// 更新活跃筛选标签
function updateActiveFilters() {
    activeFilters.innerHTML = '';
    
    if (filters.keyword) {
        addFilterTag(`关键词: ${filters.keyword}`, () => {
            searchInput.value = '';
            filters.keyword = '';
            applyFilters();
        });
    }
    
    if (filters.province) {
        addFilterTag(filters.province, () => {
            provinceSelect.value = '';
            filters.province = '';
            filters.city = '';
            updateCityOptions();
            applyFilters();
        });
    }
    
    if (filters.city) {
        addFilterTag(filters.city, () => {
            citySelect.value = '';
            filters.city = '';
            applyFilters();
        });
    }
    
    if (filters.category) {
        addFilterTag(filters.category, () => {
            categorySelect.value = '';
            filters.category = '';
            applyFilters();
        });
    }
    
    if (filters.dateRange) {
        const dateLabels = {
            'today': '今天',
            'weekend': '本周末',
            'month': '本月',
            'next-month': '下个月'
        };
        addFilterTag(dateLabels[filters.dateRange], () => {
            dateSelect.value = '';
            filters.dateRange = '';
            applyFilters();
        });
    }
}

// 添加筛选标签
function addFilterTag(text, onRemove) {
    const tag = document.createElement('span');
    tag.className = 'filter-tag';
    tag.innerHTML = `${text} <span class="remove-filter">×</span>`;
    tag.querySelector('.remove-filter').addEventListener('click', onRemove);
    activeFilters.appendChild(tag);
}

// 渲染市集列表
function renderMarkets(data) {
    marketGrid.innerHTML = '';
    resultCount.textContent = data.length;
    
    if (data.length === 0) {
        noResults.style.display = 'block';
        marketGrid.style.display = 'none';
        return;
    }
    
    noResults.style.display = 'none';
    marketGrid.style.display = 'grid';
    
    // 按开始日期排序
    data.sort((a, b) => new Date(a.start_date) - new Date(b.start_date));
    
    data.forEach(m => {
        const card = document.createElement('div');
        card.className = 'card';
        
        const dateText = m.date_display || formatDateRange(m.start_date, m.end_date);
        const locationText = m.district ? `${m.city} ${m.district}` : m.city;
        
        card.innerHTML = `
            <div class="card-img" style="background-image: url('${m.image}')">
                <div class="card-date">${dateText}</div>
            </div>
            <div class="card-body">
                <h3 class="card-title">${m.name}</h3>
                <div class="card-location">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    ${locationText}
                </div>
                <p class="card-description">${m.description}</p>
                <div class="card-footer">
                    <div class="card-tags">
                        <span class="tag">${m.category}</span>
                        ${m.frequency ? `<span class="tag tag-secondary">${m.frequency}</span>` : ''}
                    </div>
                    <span class="card-time">${m.time}</span>
                </div>
            </div>
        `;
        
        marketGrid.appendChild(card);
    });
}

// 格式化日期范围
function formatDateRange(start, end) {
    const startDate = new Date(start);
    const endDate = new Date(end);
    
    const formatDate = (date) => {
        return `${(date.getMonth() + 1).toString().padStart(2, '0')}.${date.getDate().toString().padStart(2, '0')}`;
    };
    
    if (start === end) {
        return formatDate(startDate);
    }
    
    // 同月
    if (startDate.getMonth() === endDate.getMonth()) {
        return `${formatDate(startDate)} - ${endDate.getDate().toString().padStart(2, '0')}`;
    }
    
    // 跨月
    return `${formatDate(startDate)} - ${formatDate(endDate)}`;
}

// 工具函数：防抖
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 搜索输入防抖
searchInput.addEventListener('input', debounce(() => {
    if (searchInput.value.length >= 2 || searchInput.value.length === 0) {
        applyFilters();
    }
}, 300));